import { motion } from "framer-motion";
import { Download } from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Journey", "Contact"];

/* =========================
   GITHUB ICON
========================= */

function GitHubIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.49C9.339 21.581 9.52 21.275 9.52 21.008C9.52 20.768 9.512 20.129 9.508 19.28C6.726 19.886 6.139 17.938 6.139 17.938C5.685 16.785 5.03 16.478 5.03 16.478C4.121 15.857 5.099 15.87 5.099 15.87C6.103 15.941 6.631 16.901 6.631 16.901C7.524 18.43 8.97 17.981 9.538 17.723C9.628 17.078 9.888 16.63 10.176 16.377C7.955 16.124 5.62 15.266 5.62 11.123C5.62 9.942 6.042 8.977 6.743 8.22C6.63 7.964 6.26 6.873 6.84 5.384C6.84 5.384 7.777 5.084 9.51 6.257C10.4 6.01 11.355 5.887 12.31 5.883C13.265 5.887 14.22 6.01 15.11 6.257C16.843 5.084 17.78 5.384 17.78 5.384C18.36 6.873 17.99 7.964 17.877 8.22C18.578 8.977 19 9.942 19 11.123C19 15.276 16.661 16.12 14.434 16.368C14.796 16.68 15.12 17.295 15.12 18.236C15.12 19.587 15.108 20.676 15.108 21.008C15.108 21.278 15.288 21.586 15.795 21.489C19.766 20.163 22.63 16.416 22.63 12C22.63 6.477 18.153 2 12 2Z" />
    </svg>
  );
}

/* =========================
   LINKEDIN ICON
========================= */

function LinkedInIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.45 20.45H16.9V14.89C16.9 13.56 16.87 11.85 15.04 11.85C13.18 11.85 12.9 13.3 12.9 14.79V20.45H9.35V8.99H12.76V10.56H12.81C13.28 9.66 14.44 8.71 16.18 8.71C19.77 8.71 20.45 11.07 20.45 14.15V20.45ZM5.34 7.42C4.2 7.42 3.28 6.5 3.28 5.36C3.28 4.22 4.2 3.3 5.34 3.3C6.48 3.3 7.4 4.22 7.4 5.36C7.4 6.5 6.48 7.42 5.34 7.42ZM7.12 20.45H3.56V8.99H7.12V20.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72V22.28C0 23.23.79 24 1.77 24H22.23C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

/* =========================
   X ICON
========================= */

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5L14.39 10.13L22.75 22H16.2L11.07 15.2L5.11 22H1.85L9.46 13.3L1.44 2H8.16L12.79 8.13L18.244 2ZM17.1 19.92H18.9L7.18 3.97H5.25L17.1 19.92Z" />
    </svg>
  );
}

/* =========================
   GMAIL ICON
========================= */

function GmailIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 6.5C3 5.672 3.672 5 4.5 5H5.2L12 10.1L18.8 5H19.5C20.328 5 21 5.672 21 6.5V18C21 18.552 20.552 19 20 19H17V9.1L12 12.85L7 9.1V19H4C3.448 19 3 18.552 3 18V6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">

        {/* =========================
            LOGO
        ========================= */}

        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-white">H</span>

          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            .
          </span>
        </a>

        {/* =========================
            NAVIGATION
        ========================= */}

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-400"
            >
              {item}
            </a>
          ))}
        </div>

        {/* =========================
            SOCIAL + RESUME
        ========================= */}

        <div className="flex items-center gap-2">

          {/* GitHub */}

          <motion.a
            href="https://github.com/himanshu-dev16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{
              y: -2,
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="rounded-xl border border-white/10 p-2 text-slate-300 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-400"
          >
            <GitHubIcon />
          </motion.a>

          {/* LinkedIn */}

          <motion.a
            href="https://www.linkedin.com/in/himanshu-gupta-40a554388"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{
              y: -2,
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="rounded-xl border border-white/10 p-2 text-slate-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-400"
          >
            <LinkedInIcon />
          </motion.a>

          {/* X */}

          <motion.a
            href="https://x.com/Himanshu_2816"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            whileHover={{
              y: -2,
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="rounded-xl border border-white/10 p-2 text-slate-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <XIcon />
          </motion.a>

          {/* Gmail */}

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshuguptaai16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
            whileHover={{
              y: -2,
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="rounded-xl border border-white/10 p-2 text-slate-300 transition-all duration-300 hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-400"
          >
            <GmailIcon />
          </motion.a>

          {/* Resume */}

          <motion.a
            href="/Himanshu_Gupta_Resume.docx"
            download
            aria-label="Download Resume"
            whileHover={{
              y: -2,
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="rounded-xl border border-white/10 p-2 text-slate-300 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
          >
            <Download size={19} />
          </motion.a>

        </div>
      </div>
    </motion.nav>
  );
}