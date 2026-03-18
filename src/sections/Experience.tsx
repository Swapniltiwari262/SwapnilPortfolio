import { motion } from 'framer-motion'

const education = [
  {
    institution: "Dr. C. V. Raman University",
    degree: "B.Tech in Computer Science Engineering",
    period: "2023 — 2027",
    points: [
      "Currently pursuing B.Tech in CSE with a focus on software engineering and full-stack development.",
      "Developing a strong foundation in core CS subjects: DSA, OOP, DBMS, and Operating Systems.",
      "Actively participating in technical projects and exploring emerging technologies."
    ],
    current: true
  },
  {
    institution: "Nitishwar Mahavidyalaya",
    degree: "Class 12th (State Board)",
    period: "Completed",
    points: [
      "Successfully completed senior secondary education with a focus on Science.",
      "Developed early interest in computer science and logical problem solving."
    ],
    current: false
  },
  {
    institution: "K.C. Mount Fort School",
    degree: "Class 10th (CBSE)",
    period: "Completed",
    points: [
      "Completed secondary education with strong academic performance.",
      "Participated in various extracurricular activities and school-level competitions."
    ],
    current: false
  }
]

export default function Experience() {
  return (
    <section id="experience" className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="heading-line mb-16 uppercase tracking-widest font-black text-sm">
          <span className="text-brand font-mono text-xl mr-4 font-black">02.</span>
          Educational Journey
        </div>

        <div className="max-w-4xl space-y-12">
          {education.map((edu, i) => (
            <div key={i} className={`glass p-8 md:p-12 rounded-[2.5rem] border-brand/10 hover:border-brand/30 transition-all shadow-2xl shadow-brand/5 relative overflow-hidden ${edu.current ? 'bg-brand/5' : ''}`}>
              {edu.current && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-brand text-bg text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                  Currently Pursuing
                </div>
              )}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 border-b border-slate-800/50 pb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
                    {edu.degree} <span className="text-brand">@ {edu.institution}</span>
                  </h3>
                  <p className="text-slate-500 font-mono text-sm mt-2 font-bold uppercase tracking-widest">{edu.period}</p>
                </div>
                <div className={`mt-4 md:mt-0 px-6 py-2 glass rounded-full text-xs font-black uppercase tracking-widest ${edu.current ? 'text-brand border-brand/30' : 'text-slate-400 border-slate-800'}`}>
                  {edu.current ? 'Undergraduate' : 'Schooling'}
                </div>
              </div>
              <ul className="space-y-6">
                {edu.points.map((point, j) => (
                  <li key={j} className="flex gap-4 text-slate-400 leading-relaxed font-medium">
                    <span className="text-brand text-lg shrink-0 mt-1">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
