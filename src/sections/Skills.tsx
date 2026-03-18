import { motion } from 'framer-motion'
import { Layout, Server, Database, Terminal, Settings, Code2 } from 'lucide-react'

const skillGroups = [
  { 
    name: 'Frontend', 
    icon: <Layout className="text-blue-400" />, 
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3'] 
  },
  { 
    name: 'Backend', 
    icon: <Server className="text-purple-400" />, 
    skills: ['Node.js', 'Express.js', 'Java'] 
  },
  { 
    name: 'Databases', 
    icon: <Database className="text-green-400" />, 
    skills: ['MySQL', 'MongoDB Atlas'] 
  },
  { 
    name: 'Core CS', 
    icon: <Terminal className="text-orange-400" />, 
    skills: ['DSA', 'OOPs', 'OS', 'DBMS'] 
  },
  { 
    name: 'Dev Tools', 
    icon: <Settings className="text-pink-400" />, 
    skills: ['Git', 'GitHub', 'Vercel', 'Netlify'] 
  },
  { 
    name: 'Security', 
    icon: <Code2 className="text-cyan-400" />, 
    skills: ['JWT', 'Google OAuth', 'Bcrypt'] 
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="heading-line mb-16 uppercase tracking-widest font-black text-sm">
          <span className="text-brand font-mono text-xl mr-4 tracking-normal font-black">03.</span>
          Technical Stack
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] group hover:border-brand/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:scale-110 group-hover:bg-brand/10 group-hover:text-brand transition-all duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">{group.name}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-4 py-2 rounded-xl bg-slate-800/30 text-slate-400 border border-slate-700/50 font-mono text-[11px] font-bold uppercase tracking-wider hover:text-white hover:bg-brand/20 hover:border-brand/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
