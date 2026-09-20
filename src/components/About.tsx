import { motion } from "framer-motion";
import {
  GraduationCap,
  Database,
  Code2,
  Trophy,
  BarChart3,
  FileSpreadsheet,
  Table2,
} from "lucide-react";

import {
  SiPython,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

/* =========================
   HIGHLIGHT CARDS
========================= */

const highlights = [
  {
    icon: GraduationCap,
    value: "BCA",
    label: "IGNOU",
  },
  {
    icon: Database,
    value: "5+",
    label: "Data & Tech Projects",
  },
  {
    icon: Code2,
    value: "100+",
    label: "DSA & SQL Problems",
  },
  {
    icon: Trophy,
    value: "2026",
    label: "Data Analytics Journey",
  },
];

/* =========================
   SKILLS
========================= */

const skills = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "SQL",
    icon: Database,
    color: "#22D3EE",
  },
  {
    name: "Power BI",
    icon: BarChart3,
    color: "#F2C811",
  },
  {
    name: "Excel",
    icon: FileSpreadsheet,
    color: "#217346",
  },
  {
    name: "Tableau",
    icon: Table2,
    color: "#E97627",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/5 blur-[120px]" />

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
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Curious about data,
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              focused on insights.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =========================
              ABOUT CARD
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-9"
          >
            {/* Profile */}

            <div className="mb-7 flex items-center gap-4">
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-cyan-400"
              >
                <Database size={23} />
              </motion.div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Himanshu Gupta
                </h3>

                <p className="text-sm text-slate-500">
                  Aspiring Data Analyst
                </p>
              </div>
            </div>

            {/* About Text */}

            <p className="text-lg leading-8 text-slate-300">
              I'm a BCA student with a strong interest in data analytics
              and technology. I enjoy working with data to discover
              patterns, understand problems and turn raw information
              into meaningful insights.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              My technical experience includes Python, SQL, Power BI,
              Tableau and Advanced Excel, along with databases such as
              MySQL and MongoDB. I also work with data cleaning,
              data modeling and backend data pipelines.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              I focus on learning through practical projects — from
              automated ETL pipelines and pricing analysis to sentiment
              analysis and interactive business dashboards.
            </p>

            {/* =========================
                ANIMATED SKILLS
            ========================= */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.09,
                  },
                },
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 15,
                        scale: 0.9,
                      },

                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      },
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="group relative cursor-default"
                  >
                    {/* Hover Glow */}

                    <div
                      className="absolute inset-0 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30"
                      style={{
                        backgroundColor: skill.color,
                      }}
                    />

                    {/* Skill Badge */}

                    <div className="relative flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:text-white">

                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.15,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                      >
                        <Icon
                          size={17}
                          style={{
                            color: skill.color,
                          }}
                        />
                      </motion.div>

                      <span>
                        {skill.name}
                      </span>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* =========================
              STATS
          ========================= */}

          <div className="grid grid-cols-2 gap-4">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
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
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/20"
                >
                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.1,
                    }}
                    className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400/20"
                  >
                    <Icon size={21} />
                  </motion.div>

                  {/* Value */}

                  <p className="text-3xl font-bold text-white">
                    {item.value}
                  </p>

                  {/* Label */}

                  <p className="mt-2 text-sm text-slate-500">
                    {item.label}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}