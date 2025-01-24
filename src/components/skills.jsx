"use client"

import { useState, useEffect, useRef, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"

const AnimationContext = createContext({
  shouldAnimate: false,
  triggerAnimation: () => {},
})

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "Javascript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "MongoDB/SQL", level: 80 },
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "GraphQL", level: 75 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    title: "Tecnologias",
    skills: [
      { name: "Github", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 80 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 85 },
      { name: "Agile/Scrum", level: 90 },
    ],
  },
]

const SkillCard = ({ skill, index, resetTrigger }) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    setHasAnimated(false) // Reset animation when resetTrigger changes
  }, [resetTrigger])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white dark:bg-white/5 rounded-lg shadow-lg p-6 w-full"
    >
      <h4 className="text-base font-semibold dark:text-white">{skill.name}</h4>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-red-200 dark:bg-[#363636]">
          <motion.div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"
            initial={{ width: "0%" }}
            animate={{ width: hasAnimated ? `${skill.level}%` : "0%" }}
            onAnimationComplete={() => setHasAnimated(true)}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
        </div>
        <span className="text-sm font-bold inline-block py-1 px-2 uppercase rounded-full text-red-600 dark:text-zinc-400">
          {skill.level}%
        </span>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0])
  const [resetTrigger, setResetTrigger] = useState(0)
  const sectionRef = useRef(null)

  const triggerAnimation = () => {
    setResetTrigger((prev) => prev + 1) // Increment to trigger reset for SkillCard
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="habilidades"
      className="mb-56 mt-20 py-20 px-4 md:px-8 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          <span data-aos="fade-right" className="underline underline-offset-8 decoration-red-600">
            Habilidades
          </span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-colors ${
                selectedCategory.title === category.title
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 dark:bg-opacity-10 text-gray-800 dark:text-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6 w-full">
              {selectedCategory.skills.slice(0, 4).map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} resetTrigger={resetTrigger} />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-3xl">
              {selectedCategory.skills.slice(4, 7).map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 4} resetTrigger={resetTrigger} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
