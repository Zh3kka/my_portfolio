import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Roadmap from "@/components/roadmap"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import AnimatedCursor from "@/components/ui/animated-cursor"
import AnimatedBackground from "@/components/ui/animated-background"
import ThemeToggle from "@/components/theme-toggle"
import ScrollIndicator from "@/components/ui/scroll-indicator"
import ParallaxEffect from "@/components/ui/parallax-effect"
import Navigation from "@/components/navigation"
import AnimatedScroll from "@/components/animated-scroll"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <AnimatedCursor />
      <ThemeToggle />
      <ScrollIndicator />
      <Navigation />
      <AnimatedScroll />
      <ParallaxEffect>
        <Hero />
        <About />
        <Skills />
        <Roadmap />
        <Projects />
        <Contact />
      </ParallaxEffect>
    </main>
  )
}
