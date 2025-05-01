"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки страницы
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-50 dark:bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <svg className="w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="50" cy="50" r="40" fill="none" stroke="rgba(138, 43, 226, 0.2)" strokeWidth="8" />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255, 0, 255, 1)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, rotate: 0 }}
                animate={{
                  pathLength: 1,
                  rotate: 360,
                  transition: {
                    pathLength: { duration: 2, ease: "easeInOut" },
                    rotate: { duration: 2, ease: "linear", repeat: Number.POSITIVE_INFINITY },
                  },
                }}
              />
            </svg>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ЕС
              </span>
            </motion.div>
          </div>
          <motion.p
            className="absolute bottom-10 left-0 right-0 text-center text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Загрузка портфолио...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
