import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Phone } from 'lucide-react';

// Componente dos ícones sociais
function SocialIcons() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Daischi',
      color: 'hover:text-[#A12F2F]', // Cor de hover do GitHub
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/guilherme-poppi-b436b1266/',
      color: 'hover:text-[#A12F2F]', // Cor de hover do LinkedIn
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      href: 'tel:+551191305-2002',
      color: 'hover:text-[#A12F2F]', // Cor de hover do WhatsApp
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
          whileHover={{ scale: 1.2, y: -1}} // Aumenta no hover e move para cima
          whileTap={{ scale: 0.95 }} // Reduz ao clicar
          initial={{ opacity: 0, y: 20 }} // Animação inicial
          animate={{ opacity: 1, y: 0 }} // Animação ao aparecer
        >
          <social.icon className="w-8 h-8" /> {/* Tamanho dos ícones */}
          <span className="sr-only">{social.name}</span>
        </motion.a>
      ))}
    </div>
  );
}

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="w-full px-4 py-5">
      <header className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-white transition-colors hover:scale-105">
          <span className="hover:text-red-800 transition-colors duration-500 ease-in-out cursor-pointer">&lt;/ <span className='text-red-500'>P</span>&gt;</span>
        </h1>

        <div className="flex items-center gap-6">
          <nav className="flex space-x-6 text-lg">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-zinc-900 dark:text-white hover:text-red-800 relative transform transition-transform duration-500 ease-in-out hover:scale-105"
              >
                <span className="relative hover:text-red-800 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full">
                  <span className="transition-colors duration-500 ease-in-out">
                    {item}
                  </span>
                </span>
              </a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors relative group"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
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
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
          </motion.button>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center h-screen w-full">
        <div className="text-center grid grid-cols-2 gap-x-56">
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

          <div className="p-60 bg-zinc-200 rounded-full mt-[-70px]"></div>
        </div>
      </main>
    </div>
  );
}
