"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "AI Bharat Emergency Intelligence Dashboard",
    type: "Emergency Intelligence • Full Stack",
    description:
      "A real-time emergency intelligence dashboard designed to monitor official emergency alerts, weather conditions, risk indicators and incidents across India.",
    image: "/projects/ai-bharat.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "Recharts",
      "NDMA SACHET",
      "Open-Meteo",
    ],
    live: "https://ai-bharat-emergency-intelligence.vercel.app/",
    github:
      "https://github.com/rajgautambuilds/AI-Bharat-Emergency-Intelligence",
    featured: true,
  },
  {
    number: "02",
    title: "SkyPulse Weather Dashboard",
    type: "Weather • Data Visualization",
    description:
      "A responsive weather intelligence dashboard with real-time weather conditions, forecasts, air quality, charts, geolocation and personalized search features.",
    image: "/projects/skypulse.png",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Axios",
      "OpenWeather API",
      "Recharts",
      "Vercel",
    ],
    live: "https://skypulse-weather-dashboard.vercel.app/",
    github:
      "https://github.com/rajgautambuilds/skypulse-weather-dashboard",
    featured: true,
  },
  {
    number: "03",
    title: "AI-Based Autonomous Fire Fighting Vehicle",
    type: "Embedded Systems • Automation",
    description:
      "An autonomous emergency-response prototype designed to detect hazards and support independent response actions using camera/radar-based sensing.",
    tech: [
      "Python",
      "Arduino IDE",
      "Camera",
      "Radar",
      "Embedded Systems",
    ],
    featured: false,
  },
  {
    number: "04",
    title: "Bluetooth Controlled Car",
    type: "Embedded Systems • Robotics",
    description:
      "A Bluetooth-controlled vehicle with obstacle detection and collision prevention using sensor integration, control logic and structured testing.",
    tech: ["Arduino IDE", "MATLAB", "Bluetooth", "Sensors", "Radar"],
    featured: false,
  },
];

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "C", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Web & Frameworks",
    items: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    title: "APIs & Data",
    items: [
      "REST APIs",
      "Axios",
      "OpenWeather API",
      "Open-Meteo",
      "NDMA SACHET",
    ],
  },
  {
    title: "Visualization & Maps",
    items: [
      "Recharts",
      "Leaflet",
      "OpenStreetMap",
      "Geospatial Visualization",
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Arduino IDE",
      "MATLAB",
    ],
  },
  {
    title: "Core Concepts",
    items: ["DSA", "DBMS", "OS", "DSP", "VLSI", "PCB Design"],
  },
];

const achievements = [
  {
    number: "01",
    title: "TechExpo 2025 Finalist",
    description:
      "Finalist for the AI-Based Autonomous Fire Fighting Vehicle project.",
  },
  {
    number: "02",
    title: "40+ LeetCode Problems",
    description:
      "Regular problem solving and development of programming fundamentals.",
  },
  {
    number: "03",
    title: "Deloitte Data Analytics",
    description:
      "Completed Deloitte Data Analytics Job Simulation through Forage.",
  },
  {
    number: "04",
    title: "Data Analytics Certifications",
    description:
      "Completed analytics and exploratory data analysis learning programs.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-white/55 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200">
      {children}
    </span>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
      <p className="text-3xl font-semibold text-white">{value}</p>

      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030607] text-white">

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -40, 70, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[5%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 70, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-[20%] h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, 60, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] left-[35%] h-[25rem] w-[25rem] rounded-full bg-violet-500/10 blur-[130px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030607_80%)]" />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">

        <nav className="relative mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/60 shadow-2xl backdrop-blur-2xl">

          {/* NAVBAR TOP */}

          <div className="flex items-center justify-between px-4 py-3 sm:px-6">

            {/* LOGO */}

            <a
              href="#home"
              onClick={closeMobileMenu}
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200"
              >
                RG
              </motion.div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">
                  Raj Gautam
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Portfolio
                </p>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}

            <div className="hidden items-center gap-7 text-sm text-white/55 md:flex">

              <a
                className="transition hover:text-cyan-300"
                href="#about"
              >
                About
              </a>

              <a
                className="transition hover:text-cyan-300"
                href="#skills"
              >
                Skills
              </a>

              <a
                className="transition hover:text-cyan-300"
                href="#projects"
              >
                Projects
              </a>

              <a
                className="transition hover:text-cyan-300"
                href="#achievements"
              >
                Achievements
              </a>

              <a
                className="transition hover:text-cyan-300"
                href="#contact"
              >
                Contact
              </a>
            </div>

            {/* DESKTOP RESUME */}

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="/Raj_Gautam_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200 md:block"
            >
              Resume ↗
            </motion.a>

            {/* MOBILE MENU BUTTON */}

            <motion.button
              type="button"
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setMobileMenuOpen((value) => !value)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10 md:hidden"
            >
              <div className="relative h-5 w-5">

                <motion.span
                  animate={
                    mobileMenuOpen
                      ? {
                          rotate: 45,
                          y: 8,
                        }
                      : {
                          rotate: 0,
                          y: 2,
                        }
                  }
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute left-0 top-0 block h-[2px] w-5 rounded-full bg-white"
                />

                <motion.span
                  animate={
                    mobileMenuOpen
                      ? {
                          opacity: 0,
                          x: 8,
                        }
                      : {
                          opacity: 1,
                          x: 0,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute left-0 top-2 block h-[2px] w-5 rounded-full bg-white"
                />

                <motion.span
                  animate={
                    mobileMenuOpen
                      ? {
                          rotate: -45,
                          y: 8,
                        }
                      : {
                          rotate: 0,
                          y: 14,
                        }
                  }
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute left-0 top-0 block h-[2px] w-5 rounded-full bg-white"
                />

              </div>
            </motion.button>
          </div>

          {/* MOBILE MENU */}

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                id="mobile-navigation"
                className="overflow-hidden md:hidden"
              >
                <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-6">

                  <div className="space-y-1">

                    {[
                      ["About", "#about"],
                      ["Skills", "#skills"],
                      ["Projects", "#projects"],
                      ["Achievements", "#achievements"],
                      ["Contact", "#contact"],
                    ].map(([label, href], index) => (
                      <motion.a
                        key={label}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.05 + index * 0.04,
                        }}
                        href={href}
                        onClick={closeMobileMenu}
                        className="block rounded-xl px-4 py-3.5 text-sm text-white/70 transition hover:bg-cyan-300/10 hover:text-cyan-200"
                      >
                        {label}
                      </motion.a>
                    ))}

                  </div>

                  {/* MOBILE RESUME */}

                  <motion.a
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    href="/Raj_Gautam_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMobileMenu}
                    className="mt-4 flex items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/20"
                  >
                    Open Resume ↗
                  </motion.a>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </nav>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100svh-1rem)] max-w-7xl items-center gap-12 px-6 pb-16 pt-32 sm:gap-14 sm:pb-20 sm:pt-36 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8 lg:pt-32 xl:gap-14"
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.06)]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            Available for opportunities
          </motion.div>

          <p className="mb-5 max-w-xl text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-xs sm:tracking-[0.35em]">
            ECE Student • Software • Data • Technology
          </p>

          <h1 className="max-w-4xl text-[3.35rem] font-semibold leading-[0.91] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.6rem] xl:text-[6.35rem]">
            Building

            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              intelligent
            </span>

            digital experiences.
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/55 sm:mt-8 sm:text-lg sm:leading-8">
            I&apos;m{" "}
            <strong className="text-white">
              Raj Gautam
            </strong>
            , a B.Tech Electronics & Communication Engineering
            student building real-time, data-driven and
            technology-focused applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5 sm:mt-10 sm:gap-4">

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#projects"
              className="rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_35px_rgba(103,232,249,0.12)] transition hover:bg-cyan-200 sm:px-7"
            >
              Explore Projects ↓
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5"
            >
              Let&apos;s Connect
            </motion.a>

          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-2.5 sm:mt-12 sm:gap-3">

            <Stat
              value="04"
              label="Projects"
            />

            <Stat
              value="40+"
              label="LeetCode"
            />

            <Stat
              value="2025"
              label="TechExpo Finalist"
            />

          </div>

        </motion.div>

        {/* HERO PHOTO */}

        <div
          className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-cyan-300/[0.06] lg:block"
          style={{
            backgroundImage:
              "linear-gradient(rgba(103,232,249,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.045) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "radial-gradient(circle, black 20%, transparent 72%)",
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="relative mx-auto w-full max-w-[410px] lg:max-w-[430px]"
        >

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-10 rounded-full bg-cyan-400/20 blur-[90px]"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-4 rounded-[42px] border border-cyan-300/20"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-8 rounded-[48px] border border-blue-400/10"
          />

          <motion.div
            whileHover={{
              scale: 1.025,
              y: -8,
            }}
            className="relative overflow-hidden rounded-[38px] border border-white/15 bg-white/[0.045] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl"
          >

            <div className="relative overflow-hidden rounded-[32px]">

              <img
                src="/profile.jpg"
                alt="Raj Gautam"
                className="h-[470px] w-full object-cover object-top sm:h-[540px] lg:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-cyan-200 backdrop-blur-xl">
                RAJ / 2026
              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <div className="rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl">

                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                    Electronics & Communication
                  </p>

                  <h2 className="mt-1 text-2xl font-semibold">
                    Raj Gautam
                  </h2>

                  <p className="mt-1 text-sm text-white/50">
                    Software • Data • Technology
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >

        <SectionTitle
          eyebrow="01 / About"
          title="Engineering ideas into useful digital products."
          description="My background combines Electronics & Communication Engineering with software development, data analytics, automation and technology-focused projects."
        />

        <div className="grid gap-5 md:grid-cols-3">

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:col-span-2"
          >

            <p className="text-lg leading-9 text-white/65">
              I enjoy working on problems where{" "}
              <span className="text-white">
                software, data and real-world systems
              </span>{" "}
              come together. My recent work includes emergency
              intelligence, weather visualization, automation and
              embedded systems.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/45">
              I focus on learning through building, structured
              problem solving and turning complex information into
              simple interfaces.
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.04] p-7"
          >

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Current Focus
            </p>

            <div className="mt-6 space-y-4 text-white/70">
              <p>→ Full-stack development</p>
              <p>→ Data visualization</p>
              <p>→ APIs & real-time systems</p>
              <p>→ Automation & embedded systems</p>
              <p>→ Problem solving</p>
            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >

        <SectionTitle
          eyebrow="02 / Skills"
          title="Tools I use to build."
          description="A practical technology stack across software, data, visualization and embedded systems."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => (

            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -7,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >

              <div className="mb-5 flex items-center justify-between">

                <h3 className="font-semibold">
                  {group.title}
                </h3>

                <span className="text-xs text-cyan-300">
                  0{index + 1}
                </span>

              </div>

              <div className="flex flex-wrap gap-2">

                {group.items.map((item) => (
                  <Pill key={item}>
                    {item}
                  </Pill>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >

        <SectionTitle
          eyebrow="03 / Selected Work"
          title="Projects built around real problems."
          description="From emergency intelligence to weather analytics and embedded automation."
        />

        <div className="space-y-8">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative overflow-hidden rounded-[32px] border transition duration-500 ${
                project.featured
                  ? "border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.035] to-blue-500/[0.08]"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >

              {/* CARD GLOW */}

              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-300/10 blur-[110px] transition duration-700 group-hover:bg-cyan-300/20" />

              <div className="relative">

                {/* PROJECT IMAGE */}

                {project.image && (

                  <div className="relative overflow-hidden border-b border-white/10">

                    <motion.img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-[260px] w-full object-cover object-top transition duration-700 sm:h-[360px] lg:h-[430px]"
                      whileHover={{
                        scale: 1.035,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />

                    {project.featured && (

                      <div className="absolute left-6 top-6 rounded-full border border-cyan-300/25 bg-black/60 px-4 py-2 text-xs font-medium text-cyan-200 backdrop-blur-xl">
                        ✦ Featured Project
                      </div>

                    )}

                    <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 font-mono text-xs text-white/60 backdrop-blur-xl">
                      {project.number}
                    </div>

                  </div>

                )}

                {/* PROJECT CONTENT */}

                <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_220px] lg:p-11">

                  <div>

                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                      {project.type}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
                      {project.description}
                    </p>

                    {/* TECH STACK */}

                    <div className="mt-7 flex flex-wrap gap-2">

                      {project.tech.map((tech) => (

                        <Pill key={tech}>
                          {tech}
                        </Pill>

                      ))}

                    </div>

                  </div>

                  {/* PROJECT BUTTONS */}

                  <div className="flex flex-col justify-end gap-3">

                    {project.live && (

                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{
                          scale: 1.03,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3.5 text-center text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/20"
                      >
                        Live Project ↗
                      </motion.a>

                    )}

                    {project.github && (

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{
                          scale: 1.03,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-center text-sm font-medium text-white/70 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                      >
                        GitHub ↗
                      </motion.a>

                    )}

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </section>

      {/* =========================================================
          ACHIEVEMENTS
      ========================================================= */}

      <section
        id="achievements"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >

        <SectionTitle
          eyebrow="04 / Achievements"
          title="Learning, building and competing."
        />

        <div className="grid gap-5 md:grid-cols-2">

          {achievements.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -7,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
            >

              <div className="flex items-start justify-between gap-5">

                <div>

                  <p className="font-mono text-xs text-cyan-300">
                    {item.number}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/45">
                    {item.description}
                  </p>

                </div>

                <span className="text-2xl text-white/10">
                  ✦
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* =========================================================
          EDUCATION
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">

        <SectionTitle
          eyebrow="05 / Education"
          title="Academic foundation."
        />

        <motion.div
          whileHover={{
            y: -5,
          }}
          className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
        >

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                2023 — Present
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                B.Tech — Electronics & Communication Engineering
              </h3>

              <p className="mt-2 text-white/50">
                Pranveer Singh Institute of Technology, Kanpur
              </p>

            </div>

            <div className="text-left lg:text-right">

              <p className="text-4xl font-semibold">
                74.09%
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                Current Academic Score
              </p>

            </div>

          </div>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">

            <div>

              <p className="text-sm text-white/40">
                Intermediate — UP Board
              </p>

              <p className="mt-1 text-lg font-semibold">
                81%
              </p>

            </div>

            <div>

              <p className="text-sm text-white/40">
                High School — UP Board
              </p>

              <p className="mt-1 text-lg font-semibold">
                86%
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-8"
      >

        <div className="relative overflow-hidden rounded-[36px] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.035] to-blue-500/[0.07] p-8 sm:p-12 lg:p-16">

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-cyan-300/10 blur-[100px]"
          />

          <div className="relative max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              06 / Contact
            </p>

            <h2 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
              I&apos;m open to entry-level software, data, technology
              and engineering opportunities, internships and
              meaningful projects.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">

              <motion.a
                whileHover={{
                  y: -5,
                }}
                href="mailto:gautamraj53565@gmail.com"
                className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-300/25 hover:bg-cyan-300/5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Email
                </p>

                <p className="mt-2 break-all text-sm text-white/75">
                  gautamraj53565@gmail.com
                </p>
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                }}
                href="tel:+918127574588"
                className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-300/25 hover:bg-cyan-300/5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Phone
                </p>

                <p className="mt-2 text-sm text-white/75">
                  +91 81275 74588
                </p>
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                }}
                href="https://www.linkedin.com/in/raj-gautam-7773543b0/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-300/25 hover:bg-cyan-300/5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  LinkedIn
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Connect on LinkedIn ↗
                </p>
              </motion.a>

              <motion.a
                whileHover={{
                  y: -5,
                }}
                href="https://github.com/rajgautambuilds"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-300/25 hover:bg-cyan-300/5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  GitHub
                </p>

                <p className="mt-2 text-sm text-white/75">
                  @rajgautambuilds ↗
                </p>
              </motion.a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 px-6 py-10 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">

        <div>

          <p className="text-white/70">
            Raj Gautam
          </p>

          <p className="mt-1">
            Electronics & Communication Engineering • Software • Data
          </p>

        </div>

        <div className="flex gap-5">

          <a
            href="https://github.com/rajgautambuilds"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/raj-gautam-7773543b0/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:gautamraj53565@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>

        </div>

        <p>
          © 2026 Raj Gautam
        </p>

      </footer>

    </main>
  );
}