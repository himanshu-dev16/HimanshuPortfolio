import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Trophy,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const timeline = [
  {
    type: "Experience",
    icon: BriefcaseBusiness,
    title: "Data Analytics Job Simulation",
    organization: "Deloitte — Forage",
    date: "September 2026",
    description:
      "Analyzed data in a simulated forensic technology engagement, identifying trends and patterns to produce structured business insights.",
    points: [
      "Analyzed data to identify trends and meaningful patterns.",
      "Produced structured business insights from analytical findings.",
      "Drafted reporting connecting technical metrics with corporate governance requirements.",
    ],
    certificate: "/certificates/Deloitte.png",
  },

  {
    type: "Education",
    icon: GraduationCap,
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Indira Gandhi National Open University (IGNOU)",
    date: "2025 – Present",
    description:
      "Pursuing a Bachelor of Computer Applications with a growing focus on data analytics, programming and technology.",
    points: [],
  },

  {
    type: "Certification",
    icon: Award,
    title: "Google Cloud Gen AI Academy APAC 2026",
    organization: "Powered by Hack2skill",
    date: "September 2026",
    description:
      "Training focused on building, deploying and orchestrating AI agents on Google Cloud Run.",
    points: [],
    certificate: "/certificates/google-cloud-gen-ai.jpeg",
  },

  {
    type: "Achievement",
    icon: Trophy,
    title: "100+ DSA & SQL Problems",
    organization: "LeetCode",
    date: "Achievement",
    description:
      "Solved more than 100 Data Structures & Algorithms and SQL problems as part of continuous technical practice.",
    points: [],
  },
];

export default function Experience() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Experience,
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}learning & growth.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A timeline of my academic journey, practical experience,
            certifications and technical achievements.
          </p>
        </motion.div>

        {/* =========================
            TIMELINE
        ========================= */}

        <div className="relative">

          {/* Timeline line */}

          <div className="absolute left-[23px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/40 via-blue-400/20 to-transparent sm:block" />

          <div className="space-y-8">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative sm:pl-16"
                >

                  {/* =========================
                      TIMELINE ICON
                  ========================= */}

                  <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#08101f] text-cyan-400 shadow-lg shadow-cyan-500/5 sm:flex">
                    <Icon size={21} />
                  </div>

                  {/* =========================
                      CARD
                  ========================= */}

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 sm:p-7"
                  >

                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                      {/* Left Content */}

                      <div>

                        {/* Type */}

                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-400">
                          <Icon size={13} />
                          {item.type}
                        </div>

                        {/* Title */}

                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                          {item.title}
                        </h3>

                        {/* Organization */}

                        <p className="mt-1 text-sm font-medium text-slate-400">
                          {item.organization}
                        </p>

                      </div>

                      {/* Date */}

                      <div className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
                        <CalendarDays size={15} />
                        {item.date}
                      </div>

                    </div>

                    {/* Description */}

                    <p className="mt-5 leading-7 text-slate-400">
                      {item.description}
                    </p>

                    {/* =========================
                        EXPERIENCE POINTS
                    ========================= */}

                    {item.points.length > 0 && (
                      <ul className="mt-5 space-y-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-6 text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* =========================
                        CERTIFICATE LINK
                    ========================= */}

                    {item.certificate && (
                      <motion.a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          x: 4,
                        }}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        View Certificate
                        <ArrowUpRight size={16} />
                      </motion.a>
                    )}

                  </motion.div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}