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
