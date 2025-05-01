"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  links: {
    demo?: string
    github?: string
  }
}

const projects: Project[] = [
  {
    title: "Система управления проектами",
    description:
      "Полнофункциональная система управления проектами с возможностью отслеживания задач, управления ресурсами и генерации отчетов.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Платформа онлайн-обучения",
    description:
      "Образовательная платформа с интерактивными курсами, системой тестирования и личным кабинетом для студентов и преподавателей.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Tailwind CSS", "Nest.js", "MongoDB", "AWS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "E-commerce приложение",
    description:
      "Современный интернет-магазин с каталогом товаров, корзиной, системой оплаты и личным кабинетом пользователя.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Redux", "Node.js", "Express", "Stripe API"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Аналитическая панель",
    description:
      "Интерактивная аналитическая панель для визуализации и анализа бизнес-данных с возможностью настройки и экспорта отчетов.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "D3.js", "TypeScript", "Java Spring Boot", "PostgreSQL"],
    links: {
      demo: "#",
    },
  },
  {
    title: "Социальная сеть",
    description:
      "Платформа для общения с возможностью создания профиля, публикации постов, комментирования и обмена сообщениями.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "GraphQL", "Node.js", "MongoDB", "Socket.io"],
    links: {
      github: "#",
    },
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-100/50 dark:from-black/60 dark:to-black/40 relative"
    >
      <div className="max-w-6xl mx-auto px-4" ref={ref as React.RefObject<HTMLDivElement>}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Мои проекты</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Некоторые из моих последних работ, демонстрирующие мои навыки и опыт
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="hidden md:flex absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200 dark:border-white/20 hover:bg-white/70 dark:hover:bg-black/70"
              onClick={prevProject}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          <div className="hidden md:flex absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200 dark:border-white/20 hover:bg-white/70 dark:hover:bg-black/70"
              onClick={nextProject}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="md:hidden flex justify-center gap-2 mb-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200 dark:border-white/20 hover:bg-white/70 dark:hover:bg-black/70"
              onClick={prevProject}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200 dark:border-white/20 hover:bg-white/70 dark:hover:bg-black/70"
              onClick={nextProject}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative h-full">
                  <img
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">{projects[currentIndex].title}</h3>
                    <p className="text-gray-300 mb-4">{projects[currentIndex].description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {projects[currentIndex].links.demo && (
                        <a
                          href={projects[currentIndex].links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-medium text-sm hover:from-purple-700 hover:to-pink-700 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Демо
                        </a>
                      )}

                      {projects[currentIndex].links.github && (
                        <a
                          href={projects[currentIndex].links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full font-medium text-sm transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Код
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  index === currentIndex ? "bg-purple-500 scale-125" : "bg-gray-300 dark:bg-white/30"
                }`}
                aria-label={`Перейти к проекту ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}
