import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Database,
  BrainCircuit,
  Wrench,
  Table2,
  FileSpreadsheet,
  Eraser,
  Boxes,
  FileCode2,
  Flame,
  Cloud,
  Link2,
  Braces,
  MessageSquareText,
  MessageCircle,
  Bot,
  GitBranch,
  CodeXml,
  Smartphone,
  Zap,
  Megaphone,
  Target,
} from "lucide-react";

/* =========================
   SKILL GROUPS
========================= */

const skillGroups = [
  {
    title: "Business Intelligence",
    description: "Turning datasets into clear business insights.",
    icon: BarChart3,
    skills: [
      {
        name: "Power BI",
        icon: BarChart3,
      },
      {
        name: "Tableau",
        icon: Table2,
      },
      {
        name: "Advanced Excel",
        icon: FileSpreadsheet,
      },
      {
        name: "Data Cleaning",
        icon: Eraser,
      },
      {
        name: "Data Modeling",
        icon: Boxes,
      },
    ],
  },

  {
    title: "Programming",
    description: "Building analysis workflows and automation.",
    icon: Code2,
    skills: [
      {
        name: "Python",
        icon: Code2,
      },
      {
        name: "SQL",
        icon: Database,
      },
      {
        name: "VBA",
        icon: FileCode2,
      },
    ],
  },

  {
    title: "Databases",
    description: "Working with structured and NoSQL data.",
    icon: Database,
    skills: [
      {
        name: "MySQL",
        icon: Database,
      },
      {
        name: "MongoDB",
        icon: Database,
      },
      {
        name: "Firebase",
        icon: Flame,
      },
      {
        name: "Cloud Firestore",
        icon: Cloud,
      },
    ],
  },

  {
    title: "AI & Data Engineering",
    description: "Processing APIs, text and intelligent systems.",
    icon: BrainCircuit,
    skills: [
      {
        name: "REST APIs",
        icon: Link2,
      },
      {
        name: "JSON",
        icon: Braces,
      },
      {
        name: "NLP",
        icon: MessageSquareText,
      },
      {
        name: "NLTK",
        icon: BrainCircuit,
      },
      {
        name: "TextBlob",
        icon: MessageCircle,
      },
      {
        name: "AI Agents",
        icon: Bot,
      },
    ],
  },

  {
    title: "Digital Marketing & Ads",
    description: "Managing digital advertising and campaign platforms.",
    icon: Megaphone,
    skills: [
      {
        name: "Google Ads",
        icon: Target,
      },
      {
        name: "Meta Ads",
        icon: Megaphone,
      },
    ],
  },

  {
    title: "Tools & Development",
    description: "Tools I use to build and manage projects.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: GitBranch,
      },
      {
        name: "GitHub",
        icon: Code2,
      },
      {
        name: "VS Code",
        icon: CodeXml,
      },
      {
        name: "React Native",
        icon: Smartphone,
      },
      {
        name: "Expo",
        icon: Zap,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-500/5 blur-[130px]" />

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
            Skills & Tools
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My technical
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}toolkit.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            A combination of analytical, programming, database,
            visualization and digital marketing skills used to work
            with data and build practical solutions.
          </p>
        </motion.div>

        {/* =========================
            SKILL CARDS
        ========================= */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]"
              >

                {/* =========================
                    GROUP ICON
                ========================= */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:text-cyan-300"
                >
                  <GroupIcon size={23} />
                </motion.div>

                {/* =========================
                    TITLE
                ========================= */}

                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {group.description}
                </p>

                {/* =========================
                    SKILLS
                ========================= */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          y: -3,
                          scale: 1.04,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className="group/skill relative"
                      >

                        {/* Skill Glow */}

                        <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/10 opacity-0 blur-md transition-opacity duration-300 group-hover/skill:opacity-100" />

                        {/* Skill Badge */}

                        <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 group-hover/skill:border-cyan-400/20 group-hover/skill:bg-cyan-400/[0.06] group-hover/skill:text-white">

                          <motion.div
                            whileHover={{
                              rotate: [0, -8, 8, 0],
                              scale: 1.15,
                            }}
                            transition={{
                              duration: 0.35,
                            }}
                            className="text-cyan-400"
                          >
                            <SkillIcon size={14} />
                          </motion.div>

                          <span>
                            {skill.name}
                          </span>

                        </div>

                      </motion.div>
                    );
                  })}

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
