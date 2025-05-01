"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const chars = nameRef.current?.innerText.split("")
    if (nameRef.current && chars) {
      nameRef.current.innerHTML = ""
      chars.forEach((char, i) => {
        const span = document.createElement("span")
        span.innerText = char
        span.style.opacity = "0"
        span.style.transform = "translateY(20px)"
        span.style.display = char === " " ? "inline" : "inline-block"
        span.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`
        nameRef.current?.appendChild(span)

        setTimeout(() => {
          span.style.opacity = "1"
          span.style.transform = "translateY(0)"
        }, 100)
      })
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10"
      >
        <h2 className="text-xl md:text-2xl font-light mb-4 text-purple-400 dark:text-purple-400">
          Fullstack Разработчик
        </h2>
        <h1 ref={nameRef} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight dark:text-white text-gray-800">
          Евгений Селезнев
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Создаю современные веб-приложения с использованием передовых технологий и 4-летним опытом разработки
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/30"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Связаться со мной
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </motion.div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-black/80" />
      </div>
    </section>
  )
}
