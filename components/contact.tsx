"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="contact" className="py-20 bg-gray-100/50 dark:bg-black/40 relative">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Связаться со мной</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Если у вас есть вопросы или предложения о сотрудничестве, не стесняйтесь связаться со мной
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Контактная информация</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800 dark:text-white">Email</h4>
                  <a
                    href="mailto:evgeny@example.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    evgeny@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800 dark:text-white">Телефон</h4>
                  <a
                    href="tel:+79001234567"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800 dark:text-white">Локация</h4>
                  <p className="text-gray-600 dark:text-gray-400">Москва, Россия</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-medium text-lg mb-4 text-gray-800 dark:text-white">Социальные сети</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-200/70 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-500/20 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-400 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-200/70 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-500/20 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-400 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-200/70 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-500/20 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-400 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Отправить сообщение</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 focus-visible:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ваш email"
                    className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 focus-visible:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Тема
                </label>
                <Input
                  id="subject"
                  placeholder="Тема сообщения"
                  className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 focus-visible:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Ваше сообщение"
                  rows={6}
                  className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 focus-visible:ring-purple-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 py-6 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Евгений Селезнев. Все права защищены.</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
    </section>
  )
}
