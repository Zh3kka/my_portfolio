"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiRedux,
  SiGraphql,
  SiJenkins,
} from "react-icons/si"
import { DiJava } from "react-icons/di"

type Skill = {
  name: string
  level: number
  color: string
  icon: React.ReactNode
}

const frontendSkills: Skill[] = [
  { name: "React", level: 95, color: "#61DAFB", icon: <SiReact className="w-6 h-6" /> },
  { name: "Next.js", level: 90, color: "#7928CA", icon: <SiNextdotjs className="w-6 h-6" /> },
  { name: "TypeScript", level: 85, color: "#3178C6", icon: <SiTypescript className="w-6 h-6" /> },
  { name: "HTML/CSS", level: 90, color: "#E34F26", icon: <SiHtml5 className="w-6 h-6" /> },
  { name: "Tailwind CSS", level: 85, color: "#38B2AC", icon: <SiTailwindcss className="w-6 h-6" /> },
]

const backendSkills: Skill[] = [
  { name: "Node.js", level: 85, color: "#339933", icon: <SiNodedotjs className="w-6 h-6" /> },
  { name: "Nest.js", level: 80, color: "#E0234E", icon: <SiNestjs className="w-6 h-6" /> },
  { name: "Java", level: 75, color: "#007396", icon: <DiJava className="w-6 h-6" /> },
  { name: "PostgreSQL", level: 80, color: "#336791", icon: <SiPostgresql className="w-6 h-6" /> },
  { name: "MongoDB", level: 75, color: "#47A248", icon: <SiMongodb className="w-6 h-6" /> },
]

const otherTools = [
  { name: "Git", icon: <SiGit className="w-5 h-5" /> },
  { name: "Docker", icon: <SiDocker className="w-5 h-5" /> },
  { name: "AWS", icon: <SiAmazonwebservices className="w-5 h-5" /> },
  { name: "Redux", icon: <SiRedux className="w-5 h-5" /> },
  { name: "GraphQL", icon: <SiGraphql className="w-5 h-5" /> },
  { name: "CI/CD", icon: <SiJenkins className="w-5 h-5" /> },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-100/50 to-white dark:from-black/40 dark:to-black/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Мои навыки</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Я постоянно совершенствую свои навыки и изучаю новые технологии, чтобы создавать современные и эффективные
            решения.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Backend</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center md:col-span-2"
          >
            {otherTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10 dark:bg-white/5 dark:border-white/10 bg-gray-100/80 border-gray-200 group"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="flex flex-col items-center justify-center"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                    {tool.icon}
                  </div>
                  <p className="font-medium text-gray-700 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {tool.name}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}

function SkillBar({ skill, delay, isInView }: { skill: Skill; delay: number; isInView: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-1 items-center">
        <div className="flex items-center gap-2">
          <motion.div
            className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
            initial={{ scale: 1, rotate: 0 }}
            animate={isInView ? { scale: [0, 1.2, 1], rotate: [0, 10, 0] } : {}}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {skill.icon}
          </motion.div>
          <span className="font-medium text-gray-700 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {skill.level}%
        </span>
      </div>
      <div className="h-3 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: skill.color }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "linear",
              repeatDelay: 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
