import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { StarsBackground } from './components/StarsBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <main className="bg-transparent min-h-screen selection:bg-blue-500/30">
      {/* 1. 3D Stars Layer (Fixed in background) */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <StarsBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* 2. Content Layer (Scrollable above stars) */}
      <div className="content-wrapper">
        <Navbar />
        
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        
        <Footer />
      </div>

      {/* Global Background Glows (Stationary) */}
      <div className="fixed top-[15%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/5 blur-[100px] sm:blur-[150px] rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[15%] left-[-5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-600/5 blur-[100px] sm:blur-[150px] rounded-full z-0 pointer-events-none" />
    </main>
  )
}
