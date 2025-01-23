import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projetoimg from "../assets/projeto.png"; 
import Foto from '../assets/github.png'
import tradutor from "../assets/tradutor.png";
import poppibooks from "../assets/poppibooks.png";
import AOS from "aos";
import "aos/dist/aos.css";  

const projects = [
  {
    title: "Cadastro de Usuarios",
    description:
      "Sistema de cadastro de usuários com front-end em React e back-end em Node.js. Permite cadastrar e validar Nome, idade e E-mail, garantindo consistência dos dados.",
    tags: ["React", "JavaScript", "TailwindCSS"],
    codeLink: "https://github.com/Daischi/Cadastro-de-Usuario",
    demoLink: "https://registro-usuarios-p420i6z56-guilherme-poppi-limas-projects.vercel.app/",
    image: projetoimg,
  },
  {
    title: "Tradutor de Linguas",
    description:
      "Tradutor de Línguas, uma aplicação de tradução simples e elegante desenvolvida em React. Este projeto permite aos usuários traduzir textos entre várias línguas de forma fácil e intuitiva.",
    tags: ["React", "JavaScript", "TailwindCSS"],
    codeLink: "https://github.com/Daischi/Tradutor",
    demoLink: "https://tradutor-cxwozngvm-guilherme-poppi-limas-projects.vercel.app/",
    image: tradutor,
  },
  {
    title: "Poppi Books",
    description:
      "Poppi Book é um site de venda de livros, oferecendo uma plataforma prática e agradável para explorar e adquirir títulos diversos, com uma navegação fluida em qualquer dispositivo.",
    tags: ["HTML", "JavaScript", "CSS"],
    codeLink: "https://github.com/Daischi/Poppi__Books",
    demoLink: "https://daischi.github.io/Poppi__Books/",
    image: poppibooks,
  },
  
];


function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };
    useEffect(() => {
    AOS.init({
          duration: 1000,  // Duração da animação
          once: false,      // Anima apenas uma vez, quando o elemento aparecer na tela
          offset: 300,     // Distância do topo para a animação começar (opcional)
        });
  }, []);
  
  return (
    <section data-aos="zoom-in" id="projetos" className="flex flex-col items-center justify-center text-white min-h-screen">
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="underline underline-offset-8 decoration-red-600"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-12 dark:text-white text-black"
      >
        Projetos
      </motion.h2>
    </motion.span>

    <div className="relative flex items-center gap-4 overflow-hidden w-[65%]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-2xl dark:text-white hover:opacity-75 transition duration-700 dark:hover:bg-white/5 rounded-full p-4 text-slate-950 hover:bg-zinc-100"            
        onClick={prevSlide}
      >
        &lt;
      </motion.button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6 items-center p-6 rounded-lg shadow-lg"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-80 mr-6 flex items-center justify-center text-gray-400 rounded-md overflow-hidden"
          >
            <img
              src={projects[currentIndex].image || "/placeholder.svg"}
              alt="Project image"
              className="h-full w-full object-cover rounded-lg hover:border-4 border-solid border-white/5 hover:shadow-2xl transition duration-500 ease-in-out "

            />
          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="dark:text-white text-slate-900 font-semibold text-2xl dark:font-bold"
            >
              {projects[currentIndex].title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="dark:text-zinc-400 text-slate-600 w-[550px] "
            >
              {projects[currentIndex].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-2 "
            >
              {projects[currentIndex].tags.map((tag) => (
                <span key={tag} className=" dark:bg-red-600 bg-red-200 text-red-500 hover: dark:bg-opacity-40 text-xs px-2 py-1 rounded-2xl dark:text-red-300 hover:scale-105 cursor-pointer transition-all duration-300 hover:text-red-500">
                  {tag}
                </span>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4"
            >
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={projects[currentIndex].codeLink}
                className="dark:hover:bg-white/5 hover:text-red-500 dark:text-white dark:bg-transparent bg-slate-950 px-4 py-2 rounded-md transition duration-200 "
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={Foto || "/placeholder.svg"} alt="Logo git hub" className="h-5 w-5" />
                  Github
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={projects[currentIndex].demoLink}
                className="flex items-center bg-red-700 text-white px-4 py-2 rounded-md dark:hover:opacity-80 transition duration-300 dark:hover:text-black"
                target="_blank"
              >
                Web site
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-2xl dark:text-white hover:opacity-75 transition duration-700 dark:hover:bg-white/5 rounded-full p-4 text-slate-950 hover:bg-zinc-100"
        onClick={nextSlide}
      >
        &gt;
      </motion.button>
    </div>
    <div className="flex gap-2 mt-4">
      {projects.map((_, index) => (
        <motion.span
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer transition ${currentIndex === index ? "bg-red-500" : "dark:bg-gray-700 bg-zinc-200"
            }`}
          onClick={() => setCurrentIndex(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        ></motion.span>
      ))}
    </div>
  </section>
  );
}

export default ProjectCarousel;
