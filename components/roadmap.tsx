"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

type Experience = {
  company: string
  position: string
  period: string
  location: string
  description: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    company: "ТехноСофт",
    position: "Senior Fullstack Developer",
    period: "2023 - Настоящее время",
    location: "Москва, Россия",
    description: [
      "Разработка и поддержка высоконагруженных веб-приложений",
      "Руководство командой из 5 разработчиков",
      "Внедрение микросервисной архитектуры",
      "Оптимизация производительности существующих систем",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Nest.js", "PostgreSQL", "Docker"],
  },
  {
    company: "ИнноваПлюс",
    position: "Middle Fullstack Developer",
    period: "2021 - 2023",
    location: "Санкт-Петербург, Россия",
    description: [
      "Разработка корпоративных веб-приложений",
      "Интеграция с внешними API и сервисами",
      "Создание и поддержка RESTful API",
      "Участие в code review и улучшении процессов разработки",
    ],
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "AWS"],
  },
  {
    company: "ДиджиталВэй",
    position: "Frontend Developer",
    period: "2020 - 2021",
    location: "Москва, Россия",
    description: [
      "Разработка пользовательских интерфейсов",
      "Создание адаптивных и кроссбраузерных веб-приложений",
      "Оптимизация производительности фронтенда",
      "Работа с REST API",
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "SASS", "Webpack"],
  },
  {
    company: "СтартАп Инкубатор",
    position: "Junior Developer",
    period: "2019 - 2020",
    location: "Москва, Россия",
    description: [
      "Разработка компонентов пользовательского интерфейса",
      "Верстка по макетам дизайнера",
      "Исправление багов и улучшение существующего кода",
      "Участие в командных обсуждениях и планировании",
    ],
    technologies: ["JavaScript", "HTML/CSS", "jQuery", "Bootstrap"],
  },
]

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-black/60 relative">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Мой путь</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Мой профессиональный путь в сфере разработки программного обеспечения
          </p>
        </motion.div>

        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 transform md:translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.company} experience={exp} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </section>
  )
}

function ExperienceItem({
  experience,
  index,
  isInView,
}: {
  experience: Experience
  index: number
  isInView: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}>
      {/* Точка на линии */}
      <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-x-1/2 md:-translate-x-3 z-10">
        <div className="absolute inset-1 rounded-full bg-white dark:bg-black"></div>
      </div>

      {/* Контент */}
      <motion.div
        className={`pl-10 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"} md:w-1/2`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div
          className={`bg-gray-100 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300 ${isEven ? "md:ml-auto" : ""}`}
        >
          <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">{experience.company}</h3>
          <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{experience.position}</h4>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>

          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 mb-4">
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-300 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Пустая половина для выравнивания */}
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  )
}
