import { About, Blog, Gallery, Home, LifeHacks, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Viplove",
  lastName: "Karhade",
  name: `Viplove Karhade`,
  role: "Senior Infrastructure Security Engineer",
  avatar: "/images/avatar-new.jpg",
  email: "viplovekarhade@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
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
        Viplove is a Senior Infrastructure Security Engineer at Salesforce, specializing in securing enterprise-scale
        cloud environments and critical infrastructure. With a Master's in Information Assurance from Northeastern University
        and certifications including CKA and AWS Cloud Practitioner, he brings 8+ years of expertise in cloud security architecture,
        Kubernetes security hardening, and threat modeling. His work spans Fortune 500 clients across financial services, healthcare,
        and technology sectors, where he's conducted 100+ security assessments, developed container security standards, and led
        infrastructure security initiatives. From penetration testing and secure code reviews to mobile application security and
        multi-factor authentication systems, Viplove combines deep technical knowledge with strategic security thinking to protect
        organizations from evolving cyber threats.
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
            Architected and led enterprise-scale infrastructure security initiatives for complex hybrid cloud environments,
            implementing automated security assurance frameworks that reduced risk exposure across critical infrastructure.
          </>,
          <>
            Pioneered comprehensive threat modeling and architecture risk analysis methodologies, conducting deep-dive
            security design reviews that significantly enhanced risk visibility and strengthened security governance for
            business-critical cloud services.
          </>,
          <>
            Championed Kubernetes security hardening initiatives enterprise-wide, developing and enforcing container
            security best practices that established secure-by-design principles across microservices architectures.
          </>,
          <>
            Provided strategic security consultation on infrastructure design decisions, expertly balancing security
            requirements with business objectives to enable rapid innovation while maintaining robust compliance posture.
          </>,
        ],
        images: [],
      },
      {
        company: "Synopsys Inc",
        timeframe: "December 2016 - June 2022",
        role: "Associate Principal Consultant",
        achievements: [
          <>
            Delivered 100+ high-impact security assessments for Fortune 500 enterprises across financial services, healthcare,
            and technology verticals, uncovering and remediating critical vulnerabilities that prevented potential breaches
            worth millions in damages.
          </>,
          <>
            Established industry-leading Container Security Standards and conducted advanced Kubernetes/Docker security
            assessments, analyzing cluster configurations, RBAC policies, network policies, and admission controllers to
            secure containerized workloads at scale.
          </>,
          <>
            Led comprehensive security testing engagements spanning web application penetration testing (Java, Node.js,
            Angular stacks), mobile application security assessments (Android SDK, iOS platforms), network infrastructure
            evaluations, and secure code reviews using static analysis tools.
          </>,
          <>
            Drove security framework optimization initiatives for highly-regulated industries, implementing defense-in-depth
            strategies that significantly reduced attack surface while mentoring junior consultants in advanced security
            methodologies and threat analysis techniques.
          </>,
        ],
        images: [],
      },
      {
        company: "Nok Nok Labs",
        timeframe: "June 2014 - December 2014",
        role: "Security Engineer (Internship)",
        achievements: [
          <>
            Engineered secure Multi-Factor Authentication (MFA) client leveraging Bluetooth Low Energy protocols for
            cryptographically secure device bootstrapping and passwordless authentication workflows.
          </>,
          <>
            Designed and implemented innovative Proof-of-Concept solutions for next-generation authentication security
            protocols, collaborating with cross-functional teams to advance FIDO Alliance standards and strengthen
            enterprise authentication posture.
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
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Core Competencies & Certifications",
    skills: [
      {
        title: "Cloud & Container Security",
        description: (
          <>Expert in AWS cloud security architecture, Kubernetes security hardening, Docker containerization security, and
          microservices security patterns. Certified Kubernetes Administrator (CKA) and AWS Cloud Practitioner with hands-on
          experience securing enterprise container orchestration platforms, implementing RBAC policies, network policies,
          pod security standards, and admission controllers.</>
        ),
        tags: [
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "AWS",
            icon: "aws",
          },
        ],
        images: [],
      },
      {
        title: "AI/LLM Security & AI Coding Tools",
        description: (
          <>Specialized in securing AI systems, LLM applications, and AI agent architectures. Expert in prompt injection
          defense, AI model security, securing RAG pipelines, and AI coding tool security assessments. Proficient with
          GitHub Copilot, Claude Code, Cursor, and other AI-powered development tools. Experience evaluating security
          implications of AI code generation, agent-based systems, and autonomous AI workflows in enterprise environments.</>
        ),
        tags: [
          { name: "LLM Security", icon: "openai" },
          { name: "Prompt Injection", icon: "shield" },
          { name: "RAG Pipelines", icon: "lock" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Security Architecture & Threat Modeling",
        description: (
          <>Specialized in infrastructure security architecture, comprehensive threat modeling frameworks (STRIDE, PASTA),
          architecture risk analysis, and security design reviews. Expertise in implementing secure-by-design principles,
          zero-trust architectures, CI/CD pipeline security, DevSecOps automation, and automated security assurance
          frameworks for complex hybrid and multi-cloud enterprise environments.</>
        ),
        tags: [
          { name: "Threat Modeling", icon: "shield" },
          { name: "Zero Trust", icon: "lock" },
          { name: "Terraform", icon: "terraform" },
          { name: "Linux", icon: "linux" },
        ],
        images: [],
      },
      {
        title: "Penetration Testing & Secure Development",
        description: (
          <>Proficient in web application penetration testing (OWASP Top 10), mobile security assessments (Android SDK & iOS
          platforms), API security testing, network infrastructure security, and secure code review methodologies. Expert
          with industry-standard penetration testing tools (Burp Suite, Metasploit, OWASP ZAP), static/dynamic analysis
          tools (SAST/DAST), and container security scanners (Trivy, Aqua, Prisma Cloud). Strong development background
          in Java, Node.js, Angular, Python, and Android development.</>
        ),
        tags: [
          { name: "Burp Suite", icon: "burpsuite" },
          { name: "OWASP Top 10", icon: "shield" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Python", icon: "python" },
          { name: "Android", icon: "android" },
          { name: "Go", icon: "go" },
        ],
        images: [],
      },
      {
        title: "Professional Certifications",
        description: (
          <>
            • Certified Kubernetes Administrator (CKA)
            <br />• AWS Cloud Practitioner
            <br />• Access Controls by (ISC)²
            <br />• Computer Forensics Essential Training
          </>
        ),
        tags: [
          { name: "CKA", icon: "kubernetes" },
          { name: "AWS", icon: "aws" },
          { name: "ISC²", icon: "shield" },
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
