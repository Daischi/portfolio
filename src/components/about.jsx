import {useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";  


const About = () => {
  useEffect(() => {
    
    AOS.init({
      duration: 1000,  // Duração da animação
      once: false,      // Anima apenas uma vez, quando o elemento aparecer na tela
      offset: 200,     // Distância do topo para a animação começar (opcional)
    });

    // Para destruir a animação ao desmontar o componente (opcional)
    return () => {
      AOS.refresh();  // Atualiza as animações ao navegar
    };
  }, []);



return (
  <section id="sobre" className="flex justify-center items-center mt-4 overflow-hidden min-h-screen">
  <div className="w-full max-w-4xl p-6 rounded-lg text-white">
    <div className="text-center mb-6">
      <span data-aos="fade-right" className="underline underline-offset-8 decoration-red-600">
        <h2 className="text-3xl font-bold mb-12 dark:text-white text-black">Sobre mim</h2>
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div data-aos="fade-right" className="flex items-center justify-center">
        <p className="text-base leading-relaxed dark:text-zinc-400 text-slate-600">
          Olá! Meu nome é Guilherme Poppi, tenho 19 anos sou estudante de Ciência da Computação na Cruzeiro do
          Sul. Tenho paixão por tecnologia e adoro desenvolver projetos, muitos deles estão disponíveis no meu
          GitHub.
          <br />
          <br />
          <br />
          Atualmente, estou no 5º semestre da faculdade e gosto de combinar meus estudos com meu amor por jogos.
          Meu maior objetivo é construir uma carreira sólida na área de tecnologia, criando soluções inovadoras e
          impactando positivamente o mundo.
        </p>
      </div>

      <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
        {[
          { number: "10+", text: "Tecnologias dominadas" },
          { number: "20+", text: "Trabalhos postados no Github" },
          { number: "30+", text: "Horas de codificação semanais" },
          { number: "5+", text: "Cursos Realizados" },
        ].map((item, index) => (
          <div
            key={index}
            className="dark:border-0  border border-solid p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-red-600 font-bold text-3xl text-center">{item.number}</h3>
            <p className="text-center text-sm dark:text-zinc-400 text-slate-500 ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
);
}

export default About;

