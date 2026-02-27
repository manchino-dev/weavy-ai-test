import { m } from "motion/react";

const testimonials = [
  { author: "Sarah Jenkins", role: "Creative Director, Studio Alpha", quote: "Weavy has completely transformed our design workflow. The ability to chain different AI models together is a game changer." },
  { author: "Marcus Chen", role: "Product Designer, TechFlow", quote: "The node-based interface is intuitive and powerful. I can prototype ideas in minutes that used to take days." },
  { author: "Elena Rodriguez", role: "VFX Supervisor, MotionWorks", quote: "Finally, a tool that brings professional-grade control to generative AI. It's an essential part of our stack now." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tighter text-black dark:text-white">
            Loved by creative pros
          </h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((t, index) => (
            <m.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col justify-between p-6 md:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md active:shadow-md transition-shadow will-change-transform"
            >
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-6 md:mb-8 leading-relaxed font-medium">"{t.quote}"</p>
              <div>
                <div className="text-sm md:text-base font-bold text-black dark:text-white">{t.author}</div>
                <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-500">{t.role}</div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
