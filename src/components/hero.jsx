import { useEffect } from "react";
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

const Hero = () => {  // Corrigido o nome do componente para Hero
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

  return (
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
  );
};

export default Hero;  // Corrigido o nome aqui também
