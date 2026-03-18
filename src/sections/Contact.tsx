import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Loader2, Mail, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="heading-line mb-20 uppercase tracking-widest font-black text-sm">
          <span className="text-brand font-mono text-xl mr-4 font-black">05.</span>
          Get In Touch
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Let's Build <br /> <span className="text-brand">Something</span> Great.
            </h2>
            <p className="text-slate-400 text-sm sm:text-lg leading-relaxed max-w-md font-medium">
              I'm currently available for freelance projects and technical collaborations. Whether you have a question or just want to say hi, I'll get back to you!
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 glass rounded-2xl border-brand/10 hover:border-brand/30 transition-all group cursor-pointer">
                <div className="p-4 bg-brand/10 rounded-xl text-brand group-hover:bg-brand group-hover:text-bg transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Email Me</p>
                  <p className="text-white font-bold text-sm sm:text-lg break-all sm:break-normal">swapniltiwari262@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 glass rounded-2xl border-brand/10 hover:border-brand/30 transition-all group cursor-pointer">
                <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-400 group-hover:text-bg transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Socials</p>
                  <p className="text-white font-bold text-sm sm:text-lg">
                    <a href="https://www.linkedin.com/in/swapnil-tiwari-1b0516346" target="_blank" className="hover:text-brand transition-colors">LinkedIn</a> / 
                    <a href="https://github.com/Swapniltiwari262" target="_blank" className="hover:text-brand transition-colors ml-1">GitHub</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass p-5 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border-brand/10 space-y-6 sm:space-y-8 shadow-2xl shadow-brand/5 relative overflow-hidden w-full max-w-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full" />
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Your Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-all font-medium"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Your Email</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-all font-medium"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-all font-medium resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              disabled={status === 'loading'}
              type="submit"
              className="w-full bg-brand hover:bg-blue-500 disabled:bg-blue-800 text-bg font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-brand/20"
            >
              {status === 'loading' ? (
                <Loader2 className="animate-spin" />
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={24} />
                  Sent Successfully
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-center text-xs font-bold uppercase tracking-widest">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
}
