"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram, Check, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Enviar email usando EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Substitua pelo seu Service ID
        "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Substitua pela sua Public Key
      );

      setFormState({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSubmitted: false }));
      }, 5000);
    } 
    catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: "Algo deu errado. Tente novamente mais tarde.",
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Mensagens",
      value: "+55 (11) 91305-2002",
      href: "tel:+5511999999999",
    },
    {
      icon: Mail,
      label: "Email",
      value: "guilhermepoppilm@gmail.com",
      href: "mailto:guilhermepoppilm@gmail.com",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brazil",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "Github",
      color: "hover:bg-[#333]/10 hover:text-[#333] dark:hover:bg-[#fff]/10 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-[#0077B5]/10 hover:text-[#0077B5]",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-[#E4405F]/10 hover:text-[#E4405F]",
    },
  ];
  return (
    <section id="contatos" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block p-4 rounded-2xl mb-8 underline underline-offset-8 decoration-red-600"
            >
              <h2 className="text-4xl font-bold dark:text-white text-black">
              Vamos conectar
              </h2>
            </motion.div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Tem um projeto em mente? Procurando uma parceria ou trabalho em conjunto? Entre em contato pelo formulário abaixo.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md" />
                <div className="relative space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                
                    >
                      <div className="flex items-center gap-6 group">
                        <div
                          className={`relative p-4 rounded-xl bg-gradient-to-br ${item.color} transform transition-transform group-hover:scale-110`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-lg font-medium text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-600 duration-300 transition-all"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="hover:text-red-600 text-lg font-medium text-zinc-900 dark:text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700">
                    <h4 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-white">Conecte-se comigo</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -4 }}
                          className={`p-4 rounded-xl transition-all duration-300 ${social.color}`}
                        >
                          <social.icon className="w-6 h-6" />
                          <span className="sr-only">{social.label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative p-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-slate-100 dark:bg-zinc-900/70 backdrop-blur-md" />
                <form onSubmit={handleSubmit} className="relative space-y-6 ">
                  <div className="grid md:grid-cols-2 gap-6 ">
                    {[
                      { name: "name", label: "Seu Nome", type: "text", placeholder: "João Pedro" },
                      { name: "email", label: "Seu Email", type: "email", placeholder: "joaopedro@exemplo.com" },
                    ].map((field) => (
                      <div key={field.name} className="relative">
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-medium text-zinc-900 dark:text-white mb-2"
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedInput(field.name)}
                          onBlur={() => setFocusedInput(null)}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border-2 border-transparent focus:border-red-600 focus:outline-none transition-all duration-300 text-zinc-900 dark:text-white"
                          placeholder={field.placeholder}
                        />
                        <AnimatePresence>
                          {focusedInput === field.name && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r "
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("subject")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className=" w-full px-4 py-3 rounded-xl  dark:bg-zinc-800 border-2 border-transparent focus:border-red-600 focus:outline-none transition-all duration-300 text-zinc-900 dark:text-white"
                      placeholder="Como posso ajudá-lo?"
                    />
                    <AnimatePresence>
                      {focusedInput === "subject" && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r"
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-900  dark:text-white mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("message")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl  dark:bg-zinc-800 border-2 border-transparent focus:border-red-600 focus:outline-none transition-all duration-300 text-zinc-900 dark:text-white resize-none"
                      placeholder="Sua mensagem aqui..."
                    />
                    <AnimatePresence>
                      {focusedInput === "message" && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r"
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState.isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full px-8 py-4 bg-gradient-to-r text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group bg-red-700"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2 font-semibold ">
                      {formState.isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin " />
                          Sending...
                        </>
                      ) : (
                        <>
                          Enviar mensagem
                          <Send className="w-5 h-5 text" />
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Form Status Messages */}
                  <AnimatePresence>
                    {(formState.isSubmitted || formState.error) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-xl ${
                          formState.isSubmitted ? "bg-green-500/10 text-green-500" : " text-red-500"
                        } flex items-center gap-2`}
                      >
                        {formState.isSubmitted ? (
                          <>
                            <Check className="w-5 h-5" />
                            Message sent successfully!
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-5 h-5" />
                            {formState.error}
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact;
