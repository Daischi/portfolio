import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import projetoimg from "../assets/projeto.webp"
import Foto from "../assets/github.webp"
import tradutor from "../assets/tradutor.webp"
import poppibooks from "../assets/poppibooks.webp"
import poppitter from "../assets/poppitter.webp"
import lista from "../assets/lista.webp"
import PropTypes from "prop-types"




const projects = [
  {
    title: "Poppitter",
    description: "Clone simplificado do Twitter com React e Tailwind, exibindo tweets gerados aleatoriamente.",
    tags: ["React", "Crypto", "TailwindCSS", "FontAwesome"],
    codeLink: "https://github.com/Daischi/Twitter-Clone",
    demoLink: "https://twitter-clone-alpha-azure-89.vercel.app/",
    image: poppitter,
  },

  {
    title: "Poppi Books",
    description: "Poppi Book é um site de vendas de livros, com uma seleção inicial de títulos na página principal.",
    tags: ["HTML", "JavaScript", "CSS"],
    codeLink: "https://github.com/Daischi/Poppi__Books",
    demoLink: "https://daischi.github.io/Poppi__Books/",
    image: poppibooks,
  },

  {
    title: "Lista de Produtos",
    description:
      "Projeto de cadastro e listagem de produtos que exibe nome, valor e disponibilidade, ordenando pelo menor preço.",
    tags: ["HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/Daischi/Lista-de-Produtos",
    demoLink: "https://lista-de-produtos-brown.vercel.app/",
    image: lista,
  },

  {
    title: "Tradutor de Linguas",
    description:
      "Tradutor de Línguas é uma aplicação em React que permite traduções rápidas e fáceis entre diversos idiomas.",
    tags: ["React", "JavaScript", "TailwindCSS"],
    codeLink: "https://github.com/Daischi/Tradutor",
    demoLink: "https://tradutor-cxwozngvm-guilherme-poppi-limas-projects.vercel.app/",
    image: tradutor,
  },


  {
    title: "Cadastro de Usuarios",
    description:
      "O sistema permite cadastrar, editar, excluir e listar usuários, gerenciando informações como nome, idade e e-mail.",
    tags: ["React", "JavaScript", "TailwindCSS", "Node.js", "Postman"],
    codeLink: "https://github.com/Daischi/Cadastro-de-Usuario",
    demoLink: "https://registro-usuarios-p420i6z56-guilherme-poppi-limas-projects.vercel.app/",
    image: projetoimg,
  },
]

function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [hoveredImage, setHoveredImage] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 300,
    })

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projetos")
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          setPreviewOpen(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    console.log("Preview state changed:", previewOpen) // Para debug
  }, [previewOpen])

  const PreviewModal = ({ isOpen, onClose, project }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"
      }
      return () => {
        document.body.style.overflow = "unset"
      }
    }, [isOpen])

    if (!isOpen) return null

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 20, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4,
            }}
            className="relative w-[70%] max-w-5x h-[60%] bg-white dark:bg-zinc-900/95 rounded-lg p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <div className="hover:bg-opacity-55 hover:bg-zinc-700 rounded-full p-4 transition-all duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </motion.button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="h-full"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <motion.h3
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold dark:text-white mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed"
                  >
                    {project.title === "Poppitter"
                      ? "Poppitter é um clone simplificado do Twitter, desenvolvido com React e Tailwind. Ele exibe tweets gerados aleatoriamente e permite ao usuário postar novos tweets com IDs únicos. A plataforma inclui uma interface limpa e funcional, simulando a experiência do Twitter."
                      : project.title === "Cadastro de Usuarios"
                        ? "Este projeto é um sistema simples de cadastro de usuários que permite registrar, visualizar e gerenciar informações básicas, como nome, idade e e-mail. Para armazenar e gerenciar os dados, utilizei uma API que eu mesmo desenvolvi, garantindo maior controle sobre o backend. Essa API está disponível no meu GitHub para quem quiser explorar ou contribuir com melhorias."
                        : project.title === "Tradutor de Linguas"
                          ? "Uma ferramenta de tradução moderna e eficiente que suporta múltiplos idiomas."
                          : "Este projeto é um e-commerce de livros, atualmente com apenas a landing page. A página apresenta a proposta da plataforma, com um design moderno e responsivo, destacando benefícios como variedade de títulos e facilidade de compra."}
                          
                  </motion.p>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="dark:bg-red-600/20 bg-red-100 text-red-500 text-sm px-3 py-1.5 rounded-full dark:text-red-300 font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "" }}
                    whileTap={{ scale: 0.95 }}
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 dark:hover:bg-white/5 hover:text-red-500 dark:text-white dark:bg-transparent bg-slate-950 px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                  >
                    <img src={Foto || "/placeholder.svg"} alt="GitHub logo" className="h-5 w-5" />
                    Explorar Código
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, brightness: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition duration-300"
                  >
                    Visualizar Projeto
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  PreviewModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      codeLink: PropTypes.string.isRequired,
      demoLink: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  }

  return (
    <section id="projetos" className="flex flex-col items-center justify-center text-white min-h-screen px-4 md:px-0">
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
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 dark:text-white text-black"
          data-aos="fade-right"
        >
          <p data-aos="fade-right"> Projetos </p>
        </motion.h2>
      </motion.span>

      <div data-aos="fade-up" className="relative flex items-center gap-4 overflow-hidden w-full md:w-[65%]">
        {!isMobile && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl dark:text-white hover:opacity-75 transition duration-700 dark:hover:bg-white/5 rounded-full p-4 text-slate-950 hover:bg-zinc-100"
            onClick={prevSlide}
          >
            &lt;
          </motion.button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 items-center p-4 md:p-6 rounded-lg shadow-lg"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-60 md:h-80 w-full md:w-auto md:mr-6 flex items-center justify-center text-gray-400 rounded-md overflow-hidden cursor-pointer"
              onHoverStart={() => !isMobile && setHoveredImage(true)}
              onHoverEnd={() => !isMobile && setHoveredImage(false)}
              onClick={() => {
                if (!isMobile) {
                  setPreviewOpen(true)
                  console.log("Preview opened") // Para debug
                }
              }}
            >
              <img
                src={projects[currentIndex].image || "/placeholder.svg"}
                alt="Project image"
                className="h-full w-full object-cover rounded-lg transition duration-500 ease-in-out"
              />
              <AnimatePresence>
                {!isMobile && hoveredImage && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2"
                  >
                    <span className="text-white text-xl font-semibold">Clique para expandir</span>
                    <span className="text-white/75 text-sm">Ver mais detalhes</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="dark:text-white text-slate-900 font-semibold text-xl md:text-2xl dark:font-bold"
              >
                {projects[currentIndex].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="dark:text-zinc-400 text-slate-600 w-full md:w-[550px]"
              >
                {projects[currentIndex].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {projects[currentIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="dark:bg-red-600 bg-red-200 text-red-500 hover: dark:bg-opacity-40 text-xs px-2 py-1 rounded-2xl dark:text-red-300 hover:scale-105 cursor-pointer transition-all duration-300 hover:text-red-500"
                  >
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
                  className="dark:hover:bg-white/5 hover:text-red-500 dark:text-white dark:bg-transparent bg-slate-950 px-4 py-2 rounded-md transition duration-200"
                  rel="noreferrer"
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
                  rel="noreferrer"
                >
                  Web site
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {!isMobile && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl dark:text-white hover:opacity-75 transition duration-700 dark:hover:bg-white/5 rounded-full p-4 text-slate-950 hover:bg-zinc-100"
            onClick={nextSlide}
          >
            &gt;
          </motion.button>
        )}
      </div>
      <div className="flex gap-2 mt-4">
        {projects.map((_, index) => (
          <motion.span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentIndex === index ? "bg-red-500" : "dark:bg-gray-700 bg-zinc-200"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          ></motion.span>
        ))}
      </div>

      {!isMobile && (
        <PreviewModal
          isOpen={previewOpen}
          onClose={() => {
            setPreviewOpen(false)
            console.log("Preview closed") // Para debug
          }}
          project={projects[currentIndex]}
        />
      )}
    </section>
  )
}

export default ProjectCarousel

