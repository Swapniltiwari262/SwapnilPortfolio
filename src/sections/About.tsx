import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award } from 'lucide-react'

const stats = [
  { icon: <GraduationCap size={20} className="text-blue-400" />, label: "Degree", value: "B.Tech CSE" },
  { icon: <Briefcase size={20} className="text-purple-400" />, label: "Status", value: "3rd-Year Student" },
  { icon: <Award size={20} className="text-orange-400" />, label: "University", value: "CVRU Bihar" }
]

export default function About() {
  const tech = ['Java', 'React', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'JavaScript', 'DSA']

  return (
    <section id="about" className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="heading-line mb-16 uppercase tracking-widest font-black text-sm md:text-base">
          <span className="text-brand font-mono text-xl mr-4 tracking-normal font-black">01.</span>
          About My Journey
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 text-slate-400 space-y-8 text-lg leading-relaxed font-medium">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-brand first-letter:mr-3 first-letter:float-left first-letter:leading-[1]">
              I am Swapnil Tiwari, a <span className="text-white">3rd-year B.Tech Computer Science Engineering</span> student at <span className="text-blue-400 border-b border-blue-400/20">Dr. C. V. Raman University, Bihar</span>. I have a strong foundation in core subjects like DSA, OOP, DBMS, and Operating Systems.
            </p>
            <p>
              I specialize in full-stack development with a focus on building scalable and efficient applications. My expertise spans from <span className="text-white uppercase font-black text-sm tracking-widest">Web Development</span> with the MERN stack to <span className="text-white uppercase font-black text-sm tracking-widest">Software Engineering</span> with Java.
            </p>
            <p>
              My academic journey include completing my Class 12th from <span className="text-white">Nitishwar Mahavidyalaya</span> and Class 10th from <span className="text-white">K.C. Mount Fort School</span>. I am constantly eager to learn new technologies and look for opportunities to gain practical experience and improve my technical skills.
            </p>
            
            <div className="pt-8 grid sm:grid-cols-2 gap-4 font-mono text-sm text-slate-300">
              {tech.map((item) => (
                <li key={item} className="flex items-center gap-3 glass p-4 rounded-xl border-slate-800/50 hover:border-brand/30 transition-all hover:-translate-y-1">
                  <span className="text-brand text-lg">▹</span>
                  {item}
                </li>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="relative group max-w-[300px] mx-auto lg:mx-0 mb-8">
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-brand/20 group-hover:border-brand transition-all duration-300">
                <img 
                  src="/profile.jpeg" 
                  alt="Swapnil Tiwari" 
                  className="w-full aspect-square object-cover object-top transition-all duration-500 lg:grayscale lg:group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <div className="absolute top-4 left-4 w-full h-full border-2 border-brand rounded-3xl -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300" />
            </div>

            <div className="glass p-8 rounded-3xl space-y-6 border-brand/10 shadow-2xl shadow-brand/5">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-8 border-b border-slate-800 pb-4">Key Stats</h3>
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all">
                  <div className="p-3 glass rounded-xl">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">{stat.label}</p>
                    <p className="text-white font-black uppercase tracking-tight">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
