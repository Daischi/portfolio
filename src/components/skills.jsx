import {useEffect } from "react"
import {motion} from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"

const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "Javascript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Back-end",
      skills: [
        { name: "MongoDB/SQL", level: 80 },
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
      ],
    },
    {
      title: "Tecnologias",
      skills: [
        { name: "Github", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 80 },
      ],
    },
  ]
  const Skills = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
    
  return (
    <section id="habilidades" className=" mb-56 mt-20 py-20 px-4 md:px-8 overflow-hidden">
            <div data-aos="fade-up " className="max-w-6xl mx-auto">
              <span data-aos="fade-up" className="underline underline-offset-8 decoration-red-600">
                <h2 data-aos="fade-right" className="dark:text-white text-4xl font-bold text-black mb-12">
                  Habilidades
                </h2>
              </span>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.06 }} // Adiciona o efeito de escala ao passar o mouse
                    transition={{ duration: 0.8, type: "spring" }} // Controla a duração e o tipo de animação
                    className="dark:bg-[#242424] p-6 rounded-lg dark:border-0  border border-solid"
                  >
                    <h3 className="text-2xl font-semibold dark:text-white text-black mb-6">{category.title}</h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="dark:text-gray-300 text-slate-600">{skill.name}</span>
                            <span className="dark:text-gray-400 text-black">{skill.level}%</span>
                          </div>
                          <motion.div
                            className="h-2 dark:bg-[#333333] bg-gray-200 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: false }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.2 + skillIndex * 0.1,
                            }}
                          >
                            <motion.div
                              className="h-full bg-[#dc2626] rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: false }}
                              transition={{
                                duration: 1.5,
                                delay: index * 0.2 + skillIndex * 0.1,
                              }}
                            />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
    
            
          </section>
  );
}

export default Skills;
