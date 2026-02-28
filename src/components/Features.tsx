import { m } from "motion/react";
import { Brain, Share2, Shield, Zap } from "lucide-react";

const features = [
  { title: "Real-time Collaboration", description: "Work together with your team in real-time. Changes sync instantly across all devices.", icon: Share2, img: "/images/feat-collab.webp" },
  { title: "AI Model Aggregation", description: "Access GPT-4, Claude, Stable Diffusion, and more from a single unified interface.", icon: Brain, img: "/images/feat-ai.webp" },
  { title: "Node-based Workflow", description: "Visual programming for creatives. Connect nodes to build complex generative pipelines.", icon: Zap, img: "/images/feat-nodes.webp" },
  { title: "Enterprise Security", description: "SOC 2 Type II certified. Your data is encrypted and protected with industry standards.", icon: Shield, img: "/images/feat-security.webp" },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950 relative transition-colors">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tighter mb-4 md:mb-6 text-black dark:text-white">
            Everything you need <br />
            <span className="text-zinc-600 dark:text-zinc-500">to build faster.</span>
          </h2>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <m.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card/70 backdrop-blur-xl border border-border hover:border-primary/20 dark:hover:border-neon-lime/30 active:border-primary/20 hover:shadow-2xl hover:shadow-black/5 active:shadow-2xl transition-all duration-300 overflow-hidden will-change-transform hover:-translate-y-1"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-40 grayscale group-hover:opacity-80 group-active:opacity-80 group-hover:grayscale-[50%] group-active:grayscale-[50%] transition-all duration-500">
                <img
                  src={feature.img}
                  alt=""
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40" />
              </div>

              <div className="relative z-10">
                <m.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm group-hover:shadow-md"
                >
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                </m.div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black dark:text-white">{feature.title}</h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
