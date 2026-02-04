import convert from "heic-convert";
import { readdir, readFile, writeFile, stat, unlink } from "fs/promises";
import { join, extname, basename } from "path";
import { imageSize } from "image-size";

const GALLERY_DIR = join(import.meta.dirname, "..", "public", "images", "gallery");
const CONTENT_FILE = join(import.meta.dirname, "..", "src", "resources", "content.tsx");

async function convertHeicFiles() {
  const files = await readdir(GALLERY_DIR);
  const heicFiles = files.filter((f) => /\.heic$/i.test(f));

  if (heicFiles.length === 0) {
    console.log("[gallery] No HEIC files to convert.");
    return;
  }

  for (const file of heicFiles) {
    const src = join(GALLERY_DIR, file);
    const dst = join(GALLERY_DIR, basename(file, extname(file)) + ".jpg");

    // If JPG already exists, just delete the HEIC
    try {
      await stat(dst);
      await unlink(src);
      console.log(`[gallery] Deleted ${file} (JPG already exists)`);
      continue;
    } catch {
      // dst doesn't exist, proceed with conversion
    }

    console.log(`[gallery] Converting ${file} -> ${basename(dst)}...`);
    const input = await readFile(src);
    const output = await convert({ buffer: input, format: "JPEG", quality: 0.85 });
    await writeFile(dst, Buffer.from(output));
    await unlink(src);
    console.log(`[gallery] Done: ${basename(dst)} (deleted ${file})`);
  }
}

async function syncGalleryConfig() {
  const files = await readdir(GALLERY_DIR);
  const imageFiles = files
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();

  // Build the new images array, detecting orientation from actual dimensions + EXIF
  const entries = await Promise.all(imageFiles.map(async (file) => {
    const filePath = join(GALLERY_DIR, file);
    let orientation = "horizontal";
    try {
      const buf = await readFile(filePath);
      const dims = imageSize(buf);
      let w = dims.width;
      let h = dims.height;
      // EXIF orientation 5-8 means the image is rotated 90/270 degrees,
      // so width and height are swapped in the actual display
      if (dims.orientation && dims.orientation >= 5 && dims.orientation <= 8) {
        [w, h] = [h, w];
      }
      if (w && h && h > w) {
        orientation = "vertical";
      }
    } catch {
      // fallback to horizontal
    }
    return `    { src: "/images/gallery/${file}", alt: "Gallery image", orientation: "${orientation}" },`;
  }));

  const newImagesBlock = `images: [\n${entries.join("\n")}\n  ],`;

  // Read content.tsx and replace the images array
  const content = await readFile(CONTENT_FILE, "utf-8");
  const updated = content.replace(
    /\/\/ GALLERY_IMAGES_START[^\n]*\n\s*images:\s*\[[\s\S]*?\],/m,
    `// GALLERY_IMAGES_START (auto-synced by scripts/convert-gallery.mjs)\n  ${newImagesBlock}`
  );

  if (content !== updated) {
    await writeFile(CONTENT_FILE, updated);
    console.log(`[gallery] Synced content.tsx with ${imageFiles.length} images.`);
  } else {
    console.log(`[gallery] content.tsx already up to date (${imageFiles.length} images).`);
  }
}

async function run() {
  await convertHeicFiles();
  await syncGalleryConfig();
}

run().catch((e) => {
  console.error("[gallery] Error:", e.message);
  process.exit(1);
});
