import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Github, Linkedin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import fotohero from "../assets/fotolinkedin.jpeg"

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
      href: "https://wa.me/qr/PJAR6OILE4FKG1",
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

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("")
  const typewriterTexts = ["Full Stack Developer", "Seja muito bem-vindo!!"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isImageAnimating, setIsImageAnimating] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    })

    return () => {
      AOS.refresh()
    }
  }, [])

  useEffect(() => {
    let index = 0
    const currentText = typewriterTexts[currentIndex]

    const typeWriter = () => {
      if (index <= currentText.length) {
        setDisplayedText(currentText.slice(0, index))
        index++
      } else {
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % typewriterTexts.length)
          setDisplayedText("")
        }, 2000)
        clearInterval(interval)
      }
    }

    const interval = setInterval(typeWriter, 100)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleImageClick = () => {
    setIsImageAnimating(true)
    setTimeout(() => setIsImageAnimating(false), 1000) // Reset after animation
  }

  return (
    <main id="inicio" className="flex flex-col justify-center items-center min-h-screen w-full pt-20">
      <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-x-56">
        <div data-aos-duration="1500" data-aos="fade-right" className="text-left">
          <h1 className="text-7xl font-bold text-zinc-900 dark:text-white mb-4">
            &lt;Guilherme <br /> <span className="text-red-600">Poppi/&gt;</span>
          </h1>

          <div className="relative mb-2">
            <p className="text-zinc-600 dark:text-zinc-400 text-2xl" style={{ minHeight: "40px", overflow: "hidden" }}>
              {displayedText}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-md transition-colors duration-300 font-semibold mb-6"
          >
            Download CV
          </motion.button>

          <SocialIcons />
        </div>
        <motion.div
          data-aos-duration="1500"
          data-aos="fade-left"
          className="hidden md:block relative w-[480px] h-[480px] mt-[-70px] overflow-hidden rounded-full border-solid border-white/15 border-4 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          animate={
            isImageAnimating
              ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 0],
                }
              : {}
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={handleImageClick}
        >
          <img
            src={fotohero || "/placeholder.svg"}
            alt="Hero Image"
            className="w-full h-full object-cover transition-all duration-300"
          />
        </motion.div>
      </div>
    </main>
  )
}

export default Hero

