"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { animate, useMotionValue, useScroll } from "framer-motion"

export default function AnimatedScroll() {
  const { scrollY } = useScroll()
  const router = useRouter()
  const lastScrollY = useMotionValue(0)

  // Плавный скролл для всех внутренних ссылок
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")

      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.querySelector(href)

        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
          const startPosition = window.scrollY
          const distance = targetPosition - startPosition

          animate(lastScrollY, targetPosition, {
            type: "spring",
            stiffness: 80,
            damping: 20,
            onUpdate: (value) => {
              window.scrollTo(0, value)
            },
          })
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [lastScrollY])

  // Анимация при скролле для всех секций
  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return null
}
