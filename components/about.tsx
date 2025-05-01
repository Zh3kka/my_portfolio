"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Calendar, Award, Briefcase } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gray-100/50 dark:bg-black/40 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Обо мне
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-purple-500/20 shadow-xl shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10"></div>
              <img
                src="/photo.JPG"
                alt="Евгений Селезнев"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-30 blur-2xl"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg mb-6 text-gray-600 dark:text-gray-300"
            >
              Привет! Я Евгений, fullstack разработчик с 4-летним опытом
              создания современных веб-приложений. Я специализируюсь на
              разработке высокопроизводительных и масштабируемых решений,
              используя передовые технологии и фреймворки.
            </motion.p>

            <motion.div variants={itemVariants} className="grid gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    Имя
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Евгений Селезнев
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    Опыт
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    4 года коммерческой разработки
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    Специализация
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fullstack разработка (React, Next.js, Nest.js, Java)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    Проекты
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Более 20 успешных проектов
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-2 rounded-full font-medium transition-all">
                Скачать резюме
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full opacity-10 blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
}
