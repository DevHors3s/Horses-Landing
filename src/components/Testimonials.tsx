"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with this team was transformative. They took our complex vision and turned it into an elegant, scalable solution.",
    author: "Sarah Chen",
    role: "CEO, TechVision",
    stars: 5,
  },
  {
    quote: "The attention to detail and technical expertise exceeded our expectations. Our app performance improved by 300%.",
    author: "Marcus Rodriguez",
    role: "CTO, StreamFlow",
    stars: 5,
  },
  {
    quote: "Not just developers, but true partners in our success. They challenged our assumptions and delivered something extraordinary.",
    author: "Emily Watson",
    role: "Founder, DesignLab",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Client <span className="text-gradient">Stories</span>
          </motion.h2>
          <p className="text-slate-400">
            Dont just take our word for it. Heres what our partners have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-800 bg-[#0B1121] hover:border-blue-500/30 transition-all shadow-lg"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(item.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6">
                {item.quote}
              </blockquote>

              <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                    {item.author.charAt(0)}
                </div>
                <div>
                    <div className="font-bold text-white">{item.author}</div>
                    <div className="text-slate-500 text-sm">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;