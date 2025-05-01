"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxEffectProps {
  children: ReactNode
}

export default function ParallaxEffect({ children }: ParallaxEffectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Создаем параллакс-эффект для фоновых элементов
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <div ref={ref} className="relative">
      {/* Параллакс-элементы на фоне */}
      <motion.div
        className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full bg-purple-600/5 dark:bg-purple-600/10 blur-3xl pointer-events-none"
        style={{ y: backgroundY1, x: "-30%" }}
      />
      <motion.div
        className="fixed top-[30%] right-0 w-[600px] h-[600px] rounded-full bg-pink-600/5 dark:bg-pink-600/10 blur-3xl pointer-events-none"
        style={{ y: backgroundY2, x: "30%" }}
      />

      {/* Основной контент */}
      {children}
    </div>
  )
}
