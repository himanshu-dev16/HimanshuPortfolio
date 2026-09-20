import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  MapPin,
} from "lucide-react";

/* =========================
   GMAIL ICON
========================= */

function GmailIcon() {
  return (
    <svg
      width="22"
      height="22"
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

/* =========================
   GITHUB ICON
========================= */

function GitHubIcon() {
  return (
    <svg
      width="22"
      height="22"
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
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.848 15.041 11.848C13.188 11.848 12.905 13.294 12.905 14.787V20.452H9.35V8.997H12.76V10.563H12.808C13.282 9.663 14.443 8.714 16.176 8.714C19.78 8.714 20.447 11.084 20.447 14.173V20.452ZM5.337 7.433C4.193 7.433 3.271 6.507 3.271 5.366C3.271 4.226 4.193 3.3 5.337 3.3C6.477 3.3 7.403 4.226 7.403 5.366C7.403 6.507 6.477 7.433 5.337 7.433ZM7.119 20.452H3.555V8.997H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.226 0.792 24 1.771 24H22.225C23.207 24 24 23.226 24 22.271V1.729C24 0.774 23.207 0 22.225 0Z" />
    </svg>
  );
}

/* =========================
   X ICON
========================= */

function XIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5L14.39 10.128L22.75 22H16.11L10.91 15.19L4.95 22H1.692L9.3 13.303L1.25 2H8.06L12.76 8.218L18.244 2ZM17.104 19.75H18.906L6.975 4.126H5.042L17.104 19.75Z" />
    </svg>
  );
}

/* =========================
   ANIMATED ICON WRAPPER
========================= */

function IconBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 18,
      }}
      className={`rounded-xl p-3 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's talk about
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}data.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            I'm open to Data Analyst internship and job opportunities,
            collaborative projects and conversations around data.
          </p>
        </motion.div>

        {/* =========================
            CONTACT CARD
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">

            {/* =========================
                EMAIL
            ========================= */}

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshuguptaai16@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="flex items-center gap-4">

                <IconBox className="bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20">
                  <GmailIcon />
                </IconBox>

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    himanshuguptaai16@gmail.com
                  </p>
                </div>

              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
              />
            </motion.a>

            {/* =========================
                GITHUB
            ========================= */}

            <motion.a
              href="https://github.com/himanshu-dev16"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.04] hover:shadow-lg hover:shadow-violet-500/5"
            >
              <div className="flex items-center gap-4">

                <IconBox className="bg-violet-400/10 text-violet-400 group-hover:bg-violet-400/20">
                  <GitHubIcon />
                </IconBox>

                <div>
                  <p className="text-xs text-slate-500">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    himanshu-dev16
                  </p>
                </div>

              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
              />
            </motion.a>

            {/* =========================
                LOCATION
            ========================= */}

            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.04] hover:shadow-lg hover:shadow-blue-500/5"
            >
              <IconBox className="bg-blue-400/10 text-blue-400 group-hover:bg-blue-400/20">
                <MapPin size={21} />
              </IconBox>

              <div>
                <p className="text-xs text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-slate-200">
                  New Delhi, India
                </p>
              </div>
            </motion.div>

            {/* =========================
                RESUME
            ========================= */}

            <motion.a
              href="/Himanshu_Gupta_Resume.docx"
              download
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04] hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex items-center gap-4">

                <IconBox className="bg-emerald-400/10 text-emerald-400 group-hover:bg-emerald-400/20">
                  <Download size={21} />
                </IconBox>

                <div>
                  <p className="text-xs text-slate-500">
                    Resume
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Download Resume
                  </p>
                </div>

              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400"
              />
            </motion.a>

            {/* =========================
                LINKEDIN
            ========================= */}

            <motion.a
              href="https://www.linkedin.com/in/himanshu-gupta-40a554388"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.04] hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-4">

                <IconBox className="bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20">
                  <LinkedInIcon />
                </IconBox>

                <div>
                  <p className="text-xs text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Himanshu Gupta
                  </p>
                </div>

              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
              />
            </motion.a>

            {/* =========================
                X
            ========================= */}

            <motion.a
              href="https://x.com/Himanshu_2816"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 p-5 transition-all duration-300 hover:border-slate-400/20 hover:bg-slate-400/[0.04] hover:shadow-lg hover:shadow-slate-500/5"
            >
              <div className="flex items-center gap-4">

                <IconBox className="bg-white/5 text-slate-200 group-hover:bg-white/10">
                  <XIcon />
                </IconBox>

                <div>
                  <p className="text-xs text-slate-500">
                    X
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    @Himanshu_2816
                  </p>
                </div>

              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-200"
              />
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}