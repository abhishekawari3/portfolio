import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  status: string;
  description: string;
  tags: string[];
  focus: string;
  details: string[];
};

const projects: Project[] = [
  {
    title: "Ride-Hailing System",
    status: "In Progress",
    description:
      "A comprehensive ride-hailing platform focused on backend architecture, real-time driver tracking, efficient ride matching, and scalable microservices design.",
    tags: ["Node.js", "PostgreSQL", "Socket.io", "Redis"],
    focus: "Microservices and real-time orchestration",
    details: [
      "Designing low-latency ride matching with Redis-backed geo queries and queue-based dispatch.",
      "Building event-driven services for trip lifecycle, pricing, and driver state synchronization.",
      "Adding Socket.io streams for live driver movement updates with reconnect-safe session handling.",
    ],
  },
  {
    title: "Decentralized Crypto Wallet",
    status: "Completed",
    description:
      "A secure decentralized cryptocurrency wallet interface supporting multiple blockchain networks with real-time price updates and transaction history.",
    tags: ["Web3", "JavaScript", "Blockchain"],
    focus: "Secure multi-chain transaction flow",
    details: [
      "Implemented wallet connection flows with network switching and clear transaction signing prompts.",
      "Integrated real-time token pricing feeds and portfolio valuation updates.",
      "Structured transaction history modules for traceability across multiple blockchain networks.",
    ],
  },
  {
    title: "Real-Time P2P Communication",
    status: "Completed",
    description:
      "A peer-to-peer communication system enabling real-time video, audio, and text communication using WebRTC and Socket.io with end-to-end encryption.",
    tags: ["WebRTC", "Socket.io", "Node.js"],
    focus: "Low-latency media and signaling reliability",
    details: [
      "Built signaling workflows for room creation, ICE exchange, and peer recovery after temporary drops.",
      "Supported synchronized audio, video, and text channels for smoother collaboration sessions.",
      "Improved privacy with end-to-end encryption and secure token-based room access.",
    ],
  },
];

const experienceHighlights = [
  "Actively building backend-first projects with a system design approach and production-minded architecture choices.",
  "Comfortable translating product requirements into APIs, data models, and service boundaries.",
  "Interested in internship roles involving real-time systems, caching strategy, and high-concurrency workflows.",
  "Open to contributing across implementation, debugging, performance tuning, and architecture documentation.",
];

const overviewItems = [
  { label: "Backend Engineering", value: "Scalable API-first systems" },
  { label: "Realtime Applications", value: "Socket.io and WebRTC workflows" },
  { label: "System Design", value: "From MVP architecture to production thinking" },
];

const techStack = [
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "Socket.io", color: "#111111" },
  { name: "WebRTC", color: "#6B7280" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
  { name: "C++", color: "#00599C" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/abhishekawari3/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-awari-3a251a319" },
  { name: "Email", href: "mailto:abhishekawari@email.com" },
];

const focusLine = "Designing backend systems for speed, reliability, and real-time scale.";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const headingClass = "text-3xl font-semibold text-white sm:text-4xl";

function TypewriterText({
  text,
  speed = 45,
  startDelay = 0,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeoutId: number | undefined;
    let intervalId: number | undefined;
    let index = 0;

    const startTyping = () => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length && intervalId) {
          window.clearInterval(intervalId);
        }
      }, speed);
    };

    timeoutId = window.setTimeout(startTyping, startDelay);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [text, speed, startDelay]);

  return <>{displayed}</>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <header className="relative overflow-hidden border-b border-white/10">
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/backend-hero.jpg')" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(175deg, rgba(2,6,23,0.58) 0%, rgba(2,6,23,0.86) 65%, rgba(2,6,23,0.97) 100%), radial-gradient(circle at 20% 12%, rgba(59,130,246,0.32), transparent 42%)",
          }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-28 top-24 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 16, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 pb-10 pt-8 sm:px-10 lg:px-16">
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between text-sm text-slate-300/90"
          >
            <p className="font-semibold tracking-[0.2em] text-slate-100">ABHISHEK AWARI</p>
            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="transition hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8 py-16"
          >
            <div className="flex items-center gap-5 text-slate-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/5 text-lg font-semibold backdrop-blur">
                AA
              </div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Backend Portfolio</p>
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <TypewriterText text="Hi, I'm Abhishek Awari" speed={55} />
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-100/90 sm:text-lg">
              Computer Science Student based in India. Building scalable backend systems and real-time applications.
            </p>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="w-fit border-l-2 border-cyan-300/80 pl-4 font-mono text-sm text-cyan-100/90"
            >
              <TypewriterText text={focusLine} speed={20} startDelay={1500} />
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:abhishekawari@email.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-awari-3a251a319"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl space-y-24 px-6 py-20 sm:px-10 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />
        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-5"
        >
          <h2 className={headingClass}>About</h2>
          <p className="max-w-4xl text-lg leading-relaxed text-slate-300">
            I&apos;m a Computer Science Engineering student with a passion for building practical and scalable backend
            solutions. My journey in tech started with curiosity about how large-scale systems work, and it has evolved
            into a dedicated pursuit of backend excellence. I&apos;m particularly interested in creating systems that handle
            real-time communication and efficient data processing. I am currently focused on system design to build
            scalable MVPs.
          </p>
          <p className="text-base italic text-slate-400">
            If I&apos;m not coding, I&apos;m probably learning about distributed systems.
          </p>
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className={headingClass}>Overview</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            I build backend-focused products where architecture clarity and real-time performance are core priorities.
            Hover each line to explore what defines my current direction.
          </p>
          <div>
            {overviewItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group border-b border-white/10 py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xl font-medium text-slate-200 transition duration-300 group-hover:translate-x-1 group-hover:text-white sm:text-2xl">
                    {item.label}
                  </p>
                  <span className="text-sm text-slate-500 transition duration-300 group-hover:text-cyan-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400 transition duration-300 group-hover:text-slate-200">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-5"
        >
          <h2 className={headingClass}>Work Experience</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            Currently seeking internship opportunities in backend development with teams building API platforms,
            real-time infrastructure, and scalable service architecture.
          </p>
          <div className="space-y-3 text-slate-300">
            {experienceHighlights.map((item) => (
              <p key={item} className="max-w-4xl border-l border-white/20 pl-4 leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <h2 className={headingClass}>Selected Projects</h2>
          <div className="space-y-10">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-white/10 pb-10 last:border-b-0"
              >
                <div className="mb-3 flex flex-wrap items-center gap-4">
                  <span className="font-mono text-sm text-slate-500">0{index + 1}</span>
                  <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">{project.status}</span>
                </div>
                <p className="max-w-4xl leading-relaxed text-slate-300">{project.description}</p>
                <p className="mt-4 font-mono text-sm text-cyan-200/85">Focus: {project.focus}</p>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                  {project.details.map((detail) => (
                    <p key={detail} className="max-w-4xl border-l border-white/15 pl-3">
                      {detail}
                    </p>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          <h2 className={headingClass}>Tech Stack</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="flex items-center gap-3 text-slate-200"
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tech.color }} />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <section className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-14 sm:px-10 lg:px-16">
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          If you&apos;re interested in collaborating and building some cool things, feel free to send an
          <a href="mailto:abhishekawari@email.com" className="mx-1 text-cyan-200 transition hover:text-cyan-100">
            MAIL
          </a>
          . I&apos;ll get back to you within 2 business days. I&apos;m always open to new ideas and projects!
        </p>
        <p className="mt-5 text-sm uppercase tracking-[0.14em] text-slate-400">Built and maintained by Abhishek</p>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 sm:px-10 lg:px-16">
        <p>© 2024 Abhishek Awari</p>
      </footer>
    </div>
  );
}
