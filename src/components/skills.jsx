"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimationContext = createContext({
  shouldAnimate: false,
  animationKey: 0,
});

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "Javascript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Angular", level: 70 },
      { name: "TypeScript", level: 75 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 70 },
      { name: "SQL", level: 80 },
      { name: "C++", level: 70 },
    ],
  },
  {
    title: "Tecnologias",
    skills: [
      { name: "Github", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 80 },
      { name: "Linux", level: 85 },
      { name: "AWS", level: 70 },
      { name: "UI/UX", level: 95 },
      { name: "Windows", level: 90 },
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  const { shouldAnimate, animationKey } = useContext(AnimationContext);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      setAnimatedValue(0); // Reinicia a animação
      const interval = setInterval(() => {
        setAnimatedValue((prev) => {
          const nextValue = prev + 1;
          if (nextValue >= skill.level) {
            clearInterval(interval);
            return skill.level; // Alcança o valor final
          }
          return nextValue;
        });
      }, 3); // Velocidade da animação
      return () => clearInterval(interval);
    }
  }, [shouldAnimate, skill.level, animationKey]);

  return (
    <motion.div
      key={`${skill.name}-${animationKey}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white dark:bg-white/5 rounded-lg shadow-lg p-6 w-full"
    >
      <h4 className="text-base font-semibold dark:text-white">{skill.name}</h4>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-red-200 dark:bg-[#363636]">
          <motion.div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"
            initial={{ width: "0%" }}
            animate={{ width: `${animatedValue}%` }}
            transition={{ duration: skill.level / 100, ease: "easeInOut" }}
            style={{ width: `${animatedValue}%` }}
          ></motion.div>
        </div>
        <span className="text-sm font-bold inline-block py-1 px-2 uppercase rounded-full text-red-600 dark:text-zinc-400">
          {animatedValue}%
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          setAnimationKey((prev) => prev + 1);
        } else {
          setShouldAnimate(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ shouldAnimate, animationKey }}>
      <section
        ref={sectionRef}
        id="habilidades"
        className="mb-15 mt-20 py-20 px-4 md:px-8 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            data-aos="fade-right"
            key={`title-${animationKey}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 dark:text-white"
          >
            <span
              data-aos="fade-right"
              className="underline underline-offset-8 decoration-red-600"
            >
              Habilidades
            </span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={`${category.title}-${animationKey}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory.title === category.title
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 dark:bg-opacity-10 text-gray-800 dark:text-gray-200 "
                }`}
              >
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory.title}-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6 w-full">
                {selectedCategory.skills.slice(0, 4).map((skill, index) => (
                  <SkillCard
                    key={`${skill.name}-${animationKey}`}
                    skill={skill}
                    index={index}
                    
                  />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-3xl">
                {selectedCategory.skills.slice(4, 7).map((skill, index) => (
                  <SkillCard
                    key={`${skill.name}-${animationKey}`}
                    skill={skill}
                    index={index + 4}
                    />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </AnimationContext.Provider>
  );
};

export default Skills;
