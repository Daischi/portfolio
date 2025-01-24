import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navegation from './components/navegation';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import ProjectCarousel from './components/projects';
import Contact from './components/contacts';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const typewriterText = "Full Stack Developer"; // Texto desejado
    const typewriterElement = document.getElementById("typewriter");
  
    let index = 0;
  
    const typeWriter = () => {
      if (typewriterElement) {
        typewriterElement.textContent = typewriterText.slice(0, index); // Atualiza o texto letra por letra
        index++;
  
        if (index <= typewriterText.length) {
          setTimeout(typeWriter, 100); // Continua escrevendo
        } else {
          setTimeout(() => {
            index = 1; // Reseta o índice
            typewriterElement.textContent = ""; // Limpa o texto
            typeWriter(); // Reinicia a animação
          }, 2000); // Espera 1 segundo antes de reiniciar
        }
      }
    };
  
    // Garante que o texto começa vazio e inicia a animação
    if (typewriterElement) {
      typewriterElement.textContent = ""; // Limpa o conteúdo inicial
      typeWriter(); // Inicia a animação
    }
  }, []);


  // outro use Effect
  

  useEffect(() => {
    AOS.init({
          duration: 1000,  // Duração da animação
          once: false,      // Anima apenas uma vez, quando o elemento aparecer na tela
          offset: 200,     // Distância do topo para a animação começar (opcional)
        });
  }, []);

  return (
    <div className="w-full">

      <Navegation id="navegation" />
      <Hero id="hero" />
      <About id="about" />
      <Skills id="skills" />
      <ProjectCarousel id="projectCarousel" />
      <Contact id="contatos" />
    </div>
  );
}
