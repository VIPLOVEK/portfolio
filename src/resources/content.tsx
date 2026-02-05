import { About, Blog, Gallery, Home, LifeHacks, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Viplove",
  lastName: "Karhade",
  name: `Viplove Karhade`,
  role: "Senior Infrastructure Security Engineer",
  avatar: "/images/avatar-new.jpg",
  email: "viplovekarhade@gmail.com",
  location: "America/New_York", // IANA timezone for clock; display name hardcoded in Header.tsx and about/page.tsx
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false, // Disabled for now - can be enabled later
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on cloud security, Kubernetes, and cybersecurity best practices</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/viplovekarhade",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/VIPLOVEK",
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Securing cloud infrastructure at enterprise scale</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">CKA Certified</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Kubernetes Expert
        </Text>
      </Row>
    ),
    href: "/work/kubernetes-security-best-practices",
  },
  subline: (
    <>
    I'm Viplove, a Senior Infrastructure Security Engineer at <Text as="span" size="xl" weight="strong">Salesforce</Text>, specializing in cloud security, <br /> Kubernetes, and threat modeling. CKA & AWS Cloud Practitioner certified with 8+ years of experience.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Disabled - update with your calendar link if needed
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Viplove is a Senior Infrastructure Security Engineer at Salesforce, specializing in building secure
        'Paved Paths' for AI, Agentic, and Public Cloud ecosystems. He leads security research and governance
        for emerging technologies including the Model Context Protocol (MCP), and has driven the safe
        enterprise-wide adoption of AI coding tools such as Cursor, Windsurf, and Claude Code for the global
        developer population. His work spans infrastructure security and systemic risk — from complex secure
        design reviews for public cloud migrations and infrastructure decommissions, to engineering privileged
        access governance frameworks and leading network security transformations. Prior to Salesforce, Viplove
        spent six years at Synopsys (formerly Cigital) as an Associate Principal Consultant, leading security
        assessments for web, mobile, network, and API services, and advising on secure architecture and threat
        modeling for cloud-native and on-premise applications. He holds a Master's in Information Assurance
        from Northeastern University and is a Certified Kubernetes Administrator (CKA).
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Salesforce",
        timeframe: "June 2022 - Present",
        role: "Senior Infrastructure Security Engineer",
        achievements: [
          <>
            Leading security strategy across AI, Agentic, and Public Cloud ecosystems at enterprise scale. Established
            security research and governance for the Model Context Protocol (MCP) and drove the safe adoption of AI coding
            tools (Cursor, Windsurf, Claude Code) for Salesforce's global developer population. Spearheaded infrastructure
            security initiatives including secure design reviews for cloud migrations, privileged access governance for
            production infrastructure, and network security transformations for core services. Authored the Security Review
            Playbook and led GCP Security training to uplift the broader security organization.
          </>,
        ],
        images: [],
      },
      {
        company: "Synopsys (formerly Cigital)",
        timeframe: "Jan 2016 - May 2022",
        role: "Associate Principal Consultant",
        achievements: [
          <>
            Spent six years in security consulting, advising enterprises on secure architecture, threat modeling, and risk
            governance. Led end-to-end security assessments across web, mobile (iOS/Android), network, and API services
            using tools like Burp Suite and IBM AppScan. Performed Architecture Risk Analysis to identify systemic design
            flaws in cloud-native and on-premise applications, and guided global stakeholders through risk acceptance and
            remediation procedures.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Northeastern University",
        description: <>Master of Science (MS) in Information Assurance - Computer and Information Systems Security (2013-2015)</>,
      },
      {
        name: "Nagpur University",
        description: <>Bachelor of Engineering (B.E.) in Computer Engineering (2008)</>,
      },
    ],
  },
  publications: {
    display: true,
    title: "Publications",
    items: [
      {
        title: "Digital Shield: A Practical Guide to Online Security",
        authors: "Anupam Mehta, Sweta Deivanayagam, Viplove Karhade",
        description: (
          <>
            A practical guide that presents simple, actionable steps anyone can follow to lock down their digital life.
            Covers essential cybersecurity practices for individuals and professionals alike.
          </>
        ),
        link: "https://www.amazon.com/dp/B0FM76WZ4Z",
      },
      {
        title: "Software Supply Chain Security: Core Systems and Security Guidelines",
        authors: "Anupam Mehta, Davinder Pal Singh, Viplove Karhade, Preyansh Matharoo",
        description: (
          <>
            A framework for strengthening key components of the software supply chain — Source Code Management,
            CI/CD systems, and artifact storage — outlining core security practices for architectural design,
            access management, logging, and monitoring. Published in Science and Technology, Vol. 14 No. 2, 2024.
          </>
        ),
        link: "http://article.sapub.org/10.5923.j.scit.20241402.03.html",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Core Competencies & Certifications",
    skills: [
      {
        title: "AI & Agentic Security",
        description: (
          <>Building the security foundations for AI-powered development at enterprise scale. My work focuses on
          establishing architectural standards and governance for emerging technologies like MCP, defining how AI coding
          tools are safely adopted across large developer populations, and investigating new threat classes like prompt
          injection and Shadow AI. This is where infrastructure security meets the frontier of how software gets built.</>
        ),
        tags: [
          { name: "MCP", icon: "shield" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Infrastructure & Cloud Security",
        description: (
          <>Securing the platforms that run core services — from GCP and AWS environments to Kubernetes clusters and
          production access infrastructure. My approach centers on systemic risk: identifying where architectural decisions
          create compounding exposure, and designing governance frameworks that reduce attack surface without blocking
          engineering velocity.</>
        ),
        tags: [
          { name: "GCP", icon: "gcp" },
          { name: "AWS", icon: "aws" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Product Security & Offensive Testing",
        description: (
          <>Six years of hands-on security consulting built a deep foundation in breaking and fixing applications. Web,
          mobile (iOS/Android), network, and API assessments using tools like Burp Suite and AppScan, combined with
          Architecture Risk Analysis to find design-level flaws that code-level testing misses. This offensive background
          informs how I approach defensive security architecture today.</>
        ),
        tags: [
          { name: "Burp Suite", icon: "burpsuite" },
          { name: "Threat Modeling", icon: "shield" },
          { name: "Java", icon: "java" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Certifications",
        description: (
          <>
            • Certified Kubernetes Administrator (CKA) — 2024–2027
          </>
        ),
        tags: [
          { name: "CKA", icon: "kubernetes" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Security insights and technical deep-dives",
  description: `${person.name}'s thoughts on cloud security, Kubernetes, threat modeling, and cybersecurity best practices`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Security Projects & Case Studies – ${person.name}`,
  description: `Professional security projects, infrastructure assessments, and cybersecurity implementations by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // GALLERY_IMAGES_START (auto-synced by scripts/convert-gallery.mjs)
  images: [
    { src: "/images/gallery/20230830_143748.jpg", alt: "Gallery image", orientation: "horizontal" },
    { src: "/images/gallery/20230830_143759.jpg", alt: "Gallery image", orientation: "vertical" },
    { src: "/images/gallery/20231209_125555.jpg", alt: "Gallery image", orientation: "horizontal" },
    { src: "/images/gallery/2024-05-27_07-56-45_421.jpeg", alt: "Gallery image", orientation: "vertical" },
    { src: "/images/gallery/20240822_093952.jpg", alt: "Gallery image", orientation: "vertical" },
    { src: "/images/gallery/IMG-20260124-WA0052.jpg", alt: "Gallery image", orientation: "vertical" },
    { src: "/images/gallery/IMG_4282.jpg", alt: "Gallery image", orientation: "vertical" },
    { src: "/images/gallery/converted-1.jpg", alt: "Gallery image", orientation: "vertical" },
    { src: "/images/gallery/converted-2.jpg", alt: "Gallery image", orientation: "horizontal" },
    { src: "/images/gallery/converted-3.jpg", alt: "Gallery image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "Gallery image", orientation: "horizontal" },
  ],
};

const lifehacks: LifeHacks = {
  path: "/lifehacks",
  label: "LifeHacks",
  title: `Life Hacks & Insights – ${person.name}`,
  description: `${person.name}'s collection of useful life tips, productivity hacks, and personal insights`,
  // Create new lifehack posts by adding a new .mdx file to app/lifehacks/posts
  // All posts will be listed on the /lifehacks route
};

export { person, social, newsletter, home, about, blog, work, gallery, lifehacks };
