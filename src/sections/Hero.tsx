import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, ArrowRight, Terminal } from 'lucide-react'
import { useState, useEffect } from 'react'

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "MERN Developer",
  "Java Engineer",
  "Software Engineer"
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden pt-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/10 blur-[100px] sm:blur-[180px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-500/10 blur-[100px] sm:blur-[180px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-7xl w-full z-10 grid lg:grid-cols-12 items-center gap-10 sm:gap-16">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 glass rounded-full mb-6 sm:mb-10 border-brand/20 shadow-xl shadow-brand/5">
              <span className="relative flex h-2 sm:h-3 w-2 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 sm:h-3 w-2 sm:w-3 bg-green-500"></span>
              </span>
              <p className="text-slate-300 font-mono text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                Seeking Freelance Projects
              </p>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[0.9]">
              Swapnil <br className="hidden sm:block" />Tiwari<span className="text-brand">.</span>
            </h1>
            
            {/* Typewriter with dynamic sizing - adjusted for mobile wrapping */}
            <div className="min-h-[60px] sm:h-[80px] md:h-[100px] flex items-center mb-8 sm:mb-10">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="flex items-center gap-3 sm:gap-6"
                >
                  <Terminal className="text-brand hidden sm:block" size={32} />
                  <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-slate-400 uppercase tracking-tighter leading-none">
                    {roles[index]}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <p className="max-w-xl text-slate-400 text-sm sm:text-lg md:text-xl lg:text-2xl mb-10 sm:mb-14 leading-relaxed font-medium">
              3rd-year B.Tech Computer Science student at <span className="text-white border-b-2 sm:border-b-4 border-brand/20">Dr. C. V. Raman University</span>. 
              Engineering complex systems with Java & MERN stack.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-brand text-bg rounded-xl sm:rounded-2xl font-black text-sm md:text-lg transition-all shadow-xl shadow-brand/20 group uppercase tracking-widest"
              >
                View Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/Swapnil_Resume.pdf"
                download
                className="flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 glass rounded-xl sm:rounded-2xl font-black text-sm md:text-lg hover:bg-slate-800 transition-all border-slate-700/50 uppercase tracking-widest"
              >
                Resume
              </motion.a>
              
              <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0 sm:ml-2">
                <a href="https://github.com/Swapniltiwari262" target="_blank" className="p-3 sm:p-4 glass rounded-xl text-slate-400 hover:text-brand transition-all"><Github size={20} /></a>
                <a href="#" className="p-3 sm:p-4 glass rounded-xl text-slate-400 hover:text-brand transition-all"><Linkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <div className="w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-[420px] glass rounded-[30px] sm:rounded-[50px] border-slate-700/50 rotate-6 absolute inset-0 -z-10" />
            <img 
              src="/profile.jpeg" 
              alt="Swapnil Tiwari" 
              className="w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-[420px] object-cover rounded-[30px] sm:rounded-[50px] border-2 border-slate-800/50 shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
