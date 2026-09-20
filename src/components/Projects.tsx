import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  BarChart3,
  BrainCircuit,
  FileSpreadsheet,
  Building2,
} from "lucide-react";

const projects = [
  {
    title: "Rental Property Management & Discovery App",
    category: "Full Stack Application",
    description:
      "A rental platform with separate flows for property listing and property discovery, including location-based search, multi-image uploads, real-time data sync and in-app communication.",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Cloud Firestore",
      "Google Maps",
    ],
    icon: Building2,
    gradient: "from-cyan-500/20 to-blue-500/10",
    link: null,
  },

  {
    title: "Automated ETL Data Pipeline",
    category: "Data Engineering",
    description:
      "An automated Python ETL pipeline that extracts nested JSON from REST APIs, validates and transforms raw data, and loads structured datasets into MySQL and MongoDB.",
    technologies: [
      "Python",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "ETL",
    ],
    icon: Database,
    gradient: "from-blue-500/20 to-violet-500/10",
    link: "https://github.com/himanshu-dev16/automated_etl_pipeline",
  },

  {
    title: "Dynamic Pricing Engine",
    category: "Data Analytics & BI",
    description:
      "A Python-based pricing model designed around demand elasticity and market trends, supported by a MySQL transactional data model and a Power BI dashboard.",
    technologies: [
      "Python",
      "Machine Learning",
      "MySQL",
      "Power BI",
    ],
    icon: BarChart3,
    gradient: "from-violet-500/20 to-fuchsia-500/10",
    link: "https://github.com/himanshu-dev16/Dynamic-Pricing-Engine",
  },

  {
    title: "Enterprise Sentiment & Feedback System",
    category: "NLP & Analytics",
    description:
      "An end-to-end feedback analysis pipeline that processes customer reviews, performs NLP text cleaning and classifies feedback into Positive, Negative and Neutral sentiment.",
    technologies: [
      "Python",
      "NLP",
      "NLTK",
      "TextBlob",
      "MongoDB",
      "Tableau",
    ],
    icon: BrainCircuit,
    gradient: "from-fuchsia-500/20 to-pink-500/10",
    link: "https://github.com/himanshu-dev16/Sentiment-Feedback-System",
  },

  {
    title: "Executive VBA Dashboard & Automation",
    category: "Excel & Business Intelligence",
    description:
      "An interactive Excel dashboard for KPI tracking with advanced formulas, structured tables and VBA automation for monthly reporting and dynamic data filtering.",
    technologies: [
      "Advanced Excel",
      "VBA",
      "KPI Dashboard",
      "Automation",
    ],
    icon: FileSpreadsheet,
    gradient: "from-emerald-500/20 to-cyan-500/10",
    link: "https://github.com/himanshu-dev16/VBA-Dashboard",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-violet-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects built with
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}purpose.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A collection of projects across data analytics, business
            intelligence, automation, NLP and application development.
          </p>
        </motion.div>

        {/* =========================
            PROJECT CARDS
        ========================= */}

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 sm:p-7`}
              >

                {/* =========================
                    TOP ICON
                ========================= */}

                <div className="flex items-start gap-5">

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black/20 text-cyan-400"
                  >
                    <Icon size={23} />
                  </motion.div>

                </div>

                {/* =========================
                    CATEGORY
                ========================= */}

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400/80">
                  {project.category}
                </p>

                {/* =========================
                    TITLE
                ========================= */}

                <h3 className="mt-2 text-2xl font-bold leading-tight text-white">
                  {project.title}
                </h3>

                {/* =========================
                    DESCRIPTION
                ========================= */}

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* =========================
                    TECHNOLOGIES
                ========================= */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 group-hover:border-white/15 group-hover:text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* =========================
                    BOTTOM LINE
                ========================= */}

                <div className="mt-7 h-px w-full bg-white/5" />

                {/* =========================
                    PROJECT LINK
                ========================= */}

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: 4,
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <span>
                      View project details
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </motion.a>
                )}

              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}