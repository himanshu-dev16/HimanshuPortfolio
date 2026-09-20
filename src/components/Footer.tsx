import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">

        <div>
          <p className="font-semibold text-white">
            Himanshu Gupta
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Aspiring Data Analyst
          </p>
        </div>

        <p className="text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Himanshu Gupta. Built with React.
        </p>

        <a
          href="#home"
          className="rounded-xl border border-white/10 p-2.5 text-slate-400 transition-all hover:border-cyan-400/20 hover:text-cyan-400"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>

      </div>
    </footer>
  );
}