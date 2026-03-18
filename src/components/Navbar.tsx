import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, X, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 py-4 sm:py-6 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/50 py-3 sm:py-4 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* ENHANCED AWESOME LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-brand/40 blur-xl rounded-xl group-hover:bg-brand/60 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-150"></div>
            
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Premium Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand via-blue-600 to-purple-700 animate-gradient-slow"></div>
              
              {/* Stylized S */}
              <span className="relative z-10 text-bg text-xl sm:text-2xl font-black italic tracking-tighter">S</span>
              
              {/* Inner Gloss */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 skew-y-[-20deg] -translate-y-4"></div>
            </motion.div>
            
            {/* Status Dot */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 sm:border-4 border-slate-950 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          </div>
          
          <div className="flex flex-col -space-y-1">
            <span className="text-white font-black text-lg sm:text-2xl tracking-tighter group-hover:text-brand transition-colors duration-300 uppercase">
              Swapnil<span className="text-brand group-hover:text-white">Tiwari</span>
            </span>
            <span className="text-[8px] sm:text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.3em] group-hover:text-slate-300 transition-colors">
              B.Tech Computer Science Student
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-6 font-mono">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-slate-400 hover:text-white transition-all text-[11px] lg:text-[12px] font-bold uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-slate-800" />
          
          <div className="flex items-center gap-3 lg:gap-4">
            <a href="https://github.com/Swapniltiwari262" target="_blank" className="p-2 text-slate-400 hover:text-white transition-all hover:scale-110 glass rounded-lg">
              <Github size={18} />
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-2.5 bg-brand text-bg border border-brand/30 rounded-full text-[10px] lg:text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-bg transition-all shadow-xl shadow-brand/20 active:scale-95"
            >
              Freelance
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-3 text-slate-400 hover:text-white glass rounded-xl transition-all active:scale-90" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[80px] sm:top-[100px] bg-slate-950/98 backdrop-blur-3xl z-40 md:hidden flex flex-col p-8 sm:p-12 gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl sm:text-5xl font-black text-slate-400 hover:text-white uppercase tracking-tighter transition-all"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-8 w-full text-center py-6 bg-brand text-bg rounded-2xl text-xl font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(96,165,250,0.3)]"
            >
              Freelance Projects
            </motion.a>
            <div className="mt-auto flex gap-6 pb-12">
              <a href="https://github.com/Swapniltiwari262" target="_blank" className="p-5 glass rounded-2xl text-slate-400 hover:text-brand transition-colors"><Github size={28} /></a>
              <a href="#" className="p-5 glass rounded-2xl text-slate-400 hover:text-brand transition-colors"><Linkedin size={28} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
