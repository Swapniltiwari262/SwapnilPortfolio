import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingBag, ShieldCheck, Cpu, Laptop } from 'lucide-react'

const projects = [
  {
    title: 'SwapStore',
    description: 'A robust full-stack e-commerce ecosystem. Features secure Google OAuth & JWT authentication, real-time cart synchronization, and a high-performance REST API. Engineered with a focus on security using bcrypt encryption and MongoDB Atlas for resilient data management.',
    tech: ['Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    icon: <ShoppingBag className="text-brand" size={32} />,
    github: 'https://github.com/Swapniltiwari262',
    link: 'https://swap-store-blush.vercel.app/',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Craft Zone',
    description: 'A full-stack e-commerce app with catalog, cart, and order features. Developed reusable components and route-based pages. Integrated Google Apps Script APIs to connect React with Google Sheets for backend operations.',
    tech: ['React', 'Node.js', 'Google Apps Script', 'Vercel'],
    icon: <Laptop className="text-blue-400" size={32} />,
    github: 'https://github.com/Swapniltiwari262',
    link: 'https://craft-zone.vercel.app',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Hospital Management System',
    description: 'An individual Java-based project featuring 20+ table schema in 3NF. Built modules for patient registration, bed allocation, employee management, and ambulance tracking with a MySQL backend via JDBC.',
    tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
    icon: <ShieldCheck className="text-green-400" size={32} />,
    github: 'https://github.com/Swapniltiwari262',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Deep Signature AI',
    description: 'A KIIT Major Project for analyzing financial data. Implemented hybrid deep learning techniques combining Transformers, Graph Neural Networks (GNN), and ensemble strategies for stock prediction.',
    tech: ['Python', 'PyTorch', 'Transformers', 'GNN'],
    icon: <Cpu className="text-purple-400" size={32} />,
    github: 'https://github.com/Swapniltiwari262',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="heading-line mb-20 uppercase tracking-widest font-black text-sm">
          <span className="text-brand font-mono text-xl mr-4 font-black">04.</span>
          Selected Projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col glass rounded-[2.5rem] border-slate-800/50 hover:border-brand/40 transition-all duration-500 hover:-translate-y-4 overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden m-4 rounded-[2rem]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-100 lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-3 glass rounded-2xl shadow-2xl">
                  {project.icon}
                </div>
              </div>

              <div className="px-8 pb-10 pt-4 flex-1 flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
                  <a href={project.github} target="_blank" className="p-3 text-slate-400 hover:text-white glass rounded-xl transition-all hover:scale-110">
                    <Github size={20} />
                  </a>
                  {project.link && (
                    <a href={project.link} target="_blank" className="p-3 text-slate-400 hover:text-white glass rounded-xl transition-all hover:scale-110">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <span className="ml-auto text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest group-hover:text-brand/50 transition-colors">
                    Case Study
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
