"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // NOTA: Aquí pondremos tus claves reales de EmailJS más adelante
    // Por ahora, simulamos el envío para que veas la animación
    
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    
    // Simulación de espera de 2 segundos
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      // Limpiar formulario
      if (formRef.current) formRef.current.reset();
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      
      {/* Fondo decorativo inferior */}
      <div className="absolute bottom-0 left-0 w-full h-125 bg-linear-to-t from-blue-900/10 to-transparent -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda: Texto y Llamada a la acción */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to start <br />
              <span className="text-gradient">Something Great?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Whether you need a new website, a mobile app, or a complete digital transformation, were here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                  📧
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-white text-lg">hello@devhorses.pe</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                  📍
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-white text-lg">Lima, Perú</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: El Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-xl"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg font-bold text-white bg-linear-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center text-sm font-medium animate-pulse">
                  ✅ Message sent successfully! Well get back to you soon.
                </p>
              )}
            </form>
          </motion.div>

        </div>

        {/* Footer Simple integrado al final */}
        <div className="border-t border-slate-800 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2025 DevHorses. All rights reserved.</p>
          <div className="flex gap-6 text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;