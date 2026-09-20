import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Database,
  Sparkles,
} from "lucide-react";

const nodes = [
  { left: "8%", top: "18%", delay: 0 },
  { left: "18%", top: "62%", delay: 1.2 },
  { left: "31%", top: "28%", delay: 0.6 },
  { left: "45%", top: "72%", delay: 1.8 },
  { left: "58%", top: "20%", delay: 0.9 },
  { left: "70%", top: "55%", delay: 2.1 },
  { left: "82%", top: "25%", delay: 1.4 },
  { left: "93%", top: "68%", delay: 0.4 },
];

const chartBars = [42, 68, 52, 82, 61, 94, 73, 87];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-24"
    >
      {/* =====================================================
          GLOBAL ANIMATED DATA BACKGROUND
          Fixed = stays behind the entire portfolio while scrolling
      ===================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Base background */}
        <div className="absolute inset-0 bg-[#050816]" />

        {/* Large ambient glows */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 60, -30, 0],
            scale: [1, 0.9, 1.12, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-8%] top-[25%] h-[550px] w-[550px] rounded-full bg-violet-500/[0.07] blur-[150px]"
        />

        <motion.div
          animate={{
            x: [-50, 40, 0, -50],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] left-[35%] h-[450px] w-[450px] rounded-full bg-blue-500/[0.06] blur-[140px]"
        />

        {/* =====================================================
            DATA GRID
        ===================================================== */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.16) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 80%)",
          }}
        />

        {/* =====================================================
            MOVING HORIZONTAL DATA LINES
        ===================================================== */}
        <motion.div
          animate={{ x: ["-10%", "110%"] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[24%] h-px w-[35%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        />

        <motion.div
          animate={{ x: ["110%", "-20%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          className="absolute top-[57%] h-px w-[30%] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
        />

        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 6,
          }}
          className="absolute top-[78%] h-px w-[28%] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        />

        {/* =====================================================
            DATA NODES
        ===================================================== */}
        {nodes.map((node, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: node.left,
              top: node.top,
            }}
            animate={{
              opacity: [0.25, 0.9, 0.25],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
          </motion.div>
        ))}

        {/* =====================================================
            CONNECTING LINES
        ===================================================== */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.16]"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 0 240 C 180 150, 300 330, 470 220 S 760 120, 940 230 S 1220 350, 1500 180 S 1750 100, 1920 230"
            fill="none"
            stroke="url(#cyanLine)"
            strokeWidth="1"
            strokeDasharray="8 12"
            animate={{
              strokeDashoffset: [0, -120],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M 0 650 C 220 540, 360 760, 600 620 S 950 500, 1180 650 S 1480 780, 1920 560"
            fill="none"
            stroke="url(#violetLine)"
            strokeWidth="1"
            strokeDasharray="6 14"
            animate={{
              strokeDashoffset: [0, 140],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <defs>
            <linearGradient id="cyanLine">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="violetLine">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* =====================================================
            FLOATING MINI DATA BARS
        ===================================================== */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.18, 0.32, 0.18],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[14%] left-[7%] hidden h-28 w-40 items-end gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm lg:flex"
        >
          {[30, 55, 42, 75, 58, 82].map((height, index) => (
            <motion.div
              key={index}
              animate={{
                height: [`${height}%`, `${height + 10}%`, `${height}%`],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              className="w-full rounded-t-md bg-gradient-to-t from-cyan-500/30 to-violet-500/40"
            />
          ))}
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[6%] top-[72%] hidden rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm lg:block"
        >
          <div className="mb-2 text-[9px] uppercase tracking-[0.2em] text-slate-500">
            Live Analytics
          </div>

          <div className="flex items-end gap-1.5">
            {chartBars.slice(0, 6).map((height, index) => (
              <div
                key={index}
                style={{ height: `${height / 3}px` }}
                className="w-2 rounded-t-sm bg-gradient-to-t from-blue-500/30 to-cyan-400/50"
              />
            ))}
          </div>
        </motion.div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,6,23,0.55)_100%)]" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
            <Sparkles size={15} />
            Open to Data Analyst Opportunities
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Himanshu Gupta
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Aspiring Data Analyst
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            I turn raw data into meaningful insights using Python, SQL,
            Excel and Power BI — helping transform numbers into
            data-driven decisions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              View My Projects

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT ANALYTICS CARD
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto h-[430px] w-[430px]">

            {/* Outer Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-8 rounded-full bg-cyan-500/10 blur-3xl"
            />

            {/* Main Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-10 top-16 w-80 rounded-3xl border border-white/10 bg-[#101827]/80 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    Analytics Overview
                  </p>

                  <p className="mt-1 text-2xl font-bold text-white">
                    Data Insights
                  </p>
                </div>

                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <BarChart3 size={24} />
                </div>
              </div>

              {/* Animated Chart */}
              <div className="flex h-40 items-end justify-between gap-3">
                {[45, 70, 52, 85, 62, 95, 76].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{
                      height: `${height}%`,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.08,
                    }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-cyan-500 to-violet-500"
                  />
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-black/20 p-3">
                  <Database
                    size={17}
                    className="text-cyan-400"
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Data Processing
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Python + SQL
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/20 p-3">
                  <BarChart3
                    size={17}
                    className="text-violet-400"
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Visualization
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Power BI
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-slate-500 transition-colors hover:text-cyan-400"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}