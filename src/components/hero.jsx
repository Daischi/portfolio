import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  
import { Github, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";

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
  ];

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
  );
}

const Hero = () => {
  const [displayedText, setDisplayedText] = useState(""); // Estado para o texto da animação
  const typewriterTexts = ["Full Stack Developer", "Seja muito bem-vindo!!"]; // Textos desejados
  const [currentIndex, setCurrentIndex] = useState(0); // Índice do texto atual

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    let index = 0;
    let currentText = typewriterTexts[currentIndex];

    const typeWriter = () => {
      if (index <= currentText.length) {
        setDisplayedText(currentText.slice(0, index)); // Atualiza o texto letra por letra
        index++;
      } else {
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % typewriterTexts.length); // Alterna entre os textos
          setDisplayedText(""); // Limpa o texto antes de iniciar o próximo
        }, 2000); // Pausa de 1 segundo após terminar a escrita
        clearInterval(interval);
      }
    };

    const interval = setInterval(typeWriter, 100); // Controla a animação da digitação
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex]);

  return (
    <main id="inicio" className="flex flex-col justify-center items-center min-h-screen w-full pt-20">
      <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-x-56">
        <div data-aos-duration="1500" data-aos="fade-right" className="text-left">
          <h1 className="text-7xl font-bold text-zinc-900 dark:text-white mb-4">
            &lt;Guilherme <br /> <span className="text-red-600">Poppi/&gt;</span>
          </h1>

          {/* Contêiner fixo para o texto animado */}
          <div className="relative mb-2">
            {/* Espaço fixo reservado para o texto animado */}
            <p 
              className="text-zinc-600 dark:text-zinc-400 text-2xl" 
              style={{ minHeight: "40px", overflow: "hidden" }}
            >
              {displayedText}
            </p>
          </div>

          {/* Botão de download fixo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-md transition-colors duration-300 font-semibold mb-6"
          >
            Download CV
          </motion.button>

          <SocialIcons />
        </div>
        <div data-aos-duration="1500" data-aos="fade-left" className="hidden md:block p-60 bg-zinc-200 rounded-full mt-[-70px]" />
      </div>
    </main>
  );
};

export default Hero;
