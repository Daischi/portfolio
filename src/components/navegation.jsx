import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    AOS.init({ duration: 1000 });
  }, []);

  const [text, setText] = useState("P");

  const handleClick = () => {
    setText(text === "P" ? "Poppi" : "P");
  };


  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm bg-white dark:bg-zinc-900 shadow-md z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-5">
        <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="focus:outline-none"
    >
      <h1 className="text-xl font-bold text-zinc-900 dark:text-white transition-all duration-500 hover:scale-105 focus:scale-125">
        <span className="hover:text-red-800 focus:text-red-800 transition-colors duration-500 ease-in-out cursor-pointer">
          <a href="#inicio" className="relative inline-block">
            &lt;/ 
            <motion.span
              key={text}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 2 }} 
              exit={{ opacity: 0, scale: 1.05 }} 
              transition={{
                duration: 0.3,
                ease: "easeIn", 
              }}
              className="text-red-500 transition-all duration-300 hover:text-white"
            >
              {text}
            </motion.span>
            &gt;
          </a>
        </span>
      </h1>
    </motion.button>

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
  );
}
