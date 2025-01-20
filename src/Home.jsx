"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Github, Linkedin, Phone } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

// Skill categories data
const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "Javascript", level: 85 },
      { name: "Tailwind CSS", level: 95 },




    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "MongoDB/SQL", level: 80 },
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },

    ],
  },
  {
    title: "Tecnologias",
    skills: [
      { name: "Github", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 80 },
    ],
  },
]

// Social Icons Component
function SocialIcons() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Daischi",
      color: "hover:text-[#A12F2F]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/guilherme-poppi-b436b1266/",
      color: "hover:text-[#A12F2F]",
    },
    {
      name: "WhatsApp",
      icon: Phone,
      href: "tel:+551191305-2002",
      color: "hover:text-[#A12F2F]",
    },
  ]

  return (
    <div className="flex gap-6 items-center">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-zinc-400 dark:text-zinc-400 ${social.color} dark:hover:text-red-700 transition-colors duration-300`}
          whileHover={{ scale: 1.2, y: -1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <social.icon className="w-8 h-8" />
          <span className="sr-only">{social.name}</span>
        </motion.a>
      ))}
    </div>
  )
}

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm bg-white dark:bg-zinc-900 shadow-md z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-5">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-white transition-colors hover:scale-105">
            <span className="hover:text-red-800 transition-colors duration-500 ease-in-out cursor-pointer">
              &lt;/ <span className="text-red-500">P</span>&gt;
            </span>
          </h1>

          <div className="flex items-center gap-6">
            <nav className="flex space-x-6 text-lg">
              {["Inicio", "Sobre", "Habilidades", "Projetos", "Contatos"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-900 dark:text-white active:scale-125 hover:text-red-800 relative transform transition-transform duration-500 ease-in-out hover:scale-105"
                >
                  <span className="relative hover:text-red-800 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full">
                    <span className="transition-colors duration-500 ease-in-out">{item}</span>
                  </span>
                </a>
              ))}
            </nav>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors relative group"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-zinc-900" />
                  </motion.div>
                )}
              </AnimatePresence>

              <span className="absolute hidden group-hover:block bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs px-2 py-1 rounded-md -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-colors">
                {isDark ? "Light Mode" : "Dark Mode"}
              </span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main id="inicio" className="flex flex-col justify-center items-center min-h-screen w-full pt-20">
        <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-x-56">
          <div className="text-left">
            <h1 className="text-7xl font-bold text-zinc-900 dark:text-white mb-4">
              &lt;Guilherme <br /> <span className="text-red-600">Poppi/&gt;</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-2xl">Full Stack Developer</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-md transition-colors duration-300 font-semibold mb-6"
            >
              Download CV
            </motion.button>
            <SocialIcons />
          </div>
          <div className="hidden md:block p-60 bg-zinc-200 rounded-full mt-[-70px]" />
        </div>
      </main>

      {/* About Section */}
      <section id="sobre" className="flex justify-center items-center mt-4 overflow-hidden min-h-screen">
        <div className="w-full max-w-4xl p-6 rounded-lg text-white">
          <div className="text-center mb-6">
            <span data-aos="fade-right" className="underline underline-offset-8 decoration-red-600">
              <h2 className="text-3xl font-bold mb-12">Sobre mim</h2>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="fade-right" className="flex items-center justify-center">
              <p className="text-base leading-relaxed text-zinc-400">
                Olá! Meu nome é Guilherme Poppi, tenho 19 anos sou estudante de Ciência da Computação na Cruzeiro do
                Sul. Tenho paixão por tecnologia e adoro desenvolver projetos, muitos deles estão disponíveis no meu
                GitHub.
                <br />
                <br />
                <br />
                Atualmente, estou no 5º semestre da faculdade e gosto de combinar meus estudos com meu amor por jogos.
                Meu maior objetivo é construir uma carreira sólida na área de tecnologia, criando soluções inovadoras e
                impactando positivamente o mundo.
              </p>
            </div>

            <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
              {[
                { number: "10+", text: "Tecnologias dominadas" },
                { number: "20+", text: "Trabalhos postados no Github" },
                { number: "30+", text: "Horas de codificação semanais" },
                { number: "5+", text: "Cursos Realizados" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
                >
                  <h3 className="text-red-600 font-bold text-3xl text-center">{item.number}</h3>
                  <p className="text-center text-sm text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="min-h-screen  py-20 px-4 md:px-8">
        <div
          data-aos="fade-up " className="max-w-6xl mx-auto">

          <span data-aos="fade-up" className="underline underline-offset-8 decoration-red-600">
            <h2 data-aos="fade-right" className="text-4xl font-bold text-white mb-12">Habilidades</h2>
          </span>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {skillCategories.map((category, index) => (
    <motion.div
      key={category.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06 }} // Adiciona o efeito de escala ao passar o mouse
      transition={{ duration: 0.8, type: "spring" }} // Controla a duração e o tipo de animação
      className="bg-[#242424] p-6 rounded-lg"
    >
      <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <motion.div
              className="h-2 bg-[#333333] rounded-full overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{
                duration: 1.5,
                delay: index * 0.2 + skillIndex * 0.1,
              }}
            >
              <motion.div
                className="h-full bg-[#dc2626] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2 + skillIndex * 0.1,
                }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </section>


    <section>

    



  









    </section>










    </div>
  )
}

