import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/50 border-t border-slate-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tighter">
              Swapnil<span className="text-brand">Tiwari</span>
            </h2>
            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest font-bold">B.Tech Computer Science Student</p>
          </div>

          <div className="flex gap-6">
            {[
              { icon: <Github size={20} />, url: "https://github.com/Swapniltiwari262", label: "Github" },
              { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
              { icon: <Mail size={20} />, url: "mailto:swapniltiwari262@gmail.com", label: "Email" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.url}
                aria-label={social.label}
                className="p-3 glass rounded-full text-slate-400 hover:text-brand hover:-translate-y-1 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors"
          >
            <div className="p-2 glass rounded-lg group-hover:bg-brand/10 transition-colors">
              <ChevronUp size={20} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Top</span>
          </button>
        </div>

        <div className="flex flex-col items-center text-slate-500 font-mono text-xs border-t border-slate-900/50 pt-8">
          <p className="text-center">© 2026 Swapnil Tiwari. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
