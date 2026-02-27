import { m } from "motion/react";
import { Image, Video, Box, Wand2, Layers, Palette } from "lucide-react";

const solutions = [
  { title: "Image Generation", description: "Create stunning visuals from text prompts using state-of-the-art diffusion models.", icon: Image, img: "/images/sol-image.webp" },
  { title: "Video Synthesis", description: "Generate fluid animations and video clips with temporal consistency.", icon: Video, img: "/images/sol-video.webp" },
  { title: "Text to 3D", description: "Turn concepts into 3D assets ready for game engines and AR/VR.", icon: Box, img: "/images/sol-image.webp" },
  { title: "Upscaling", description: "Enhance resolution and detail of your media without losing quality.", icon: Wand2, img: "/images/feat-ai.webp" },
  { title: "Inpainting", description: "Edit images intelligently by filling in missing parts or removing objects.", icon: Layers, img: "/images/feat-nodes.webp" },
  { title: "Style Transfer", description: "Apply the artistic style of one image to the content of another.", icon: Palette, img: "/images/feat-collab.webp" },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-zinc-100/50 dark:bg-zinc-900/50 transition-colors">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tighter mb-4 md:mb-6 text-black dark:text-white">
            Solutions for every <br />
            <span className="text-zinc-600 dark:text-zinc-500">creative challenge.</span>
          </h2>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {solutions.map((solution, index) => (
            <m.div
              key={solution.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative p-6 md:p-10 rounded-2xl md:rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-black/20 dark:hover:border-neon-lime/30 active:border-black/20 hover:shadow-xl active:shadow-xl transition-all hover:-translate-y-1 active:-translate-y-1 overflow-hidden will-change-transform"
            >
              <div className="absolute inset-0 z-0 opacity-75 grayscale group-hover:opacity-100 group-active:opacity-100 group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500">
                <img src={solution.img} alt="" width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-white/80 dark:via-zinc-900/80 to-white/20 dark:to-zinc-900/20" />
              </div>

              <div className="relative z-10">
                <m.div
                  whileHover={{ scale: 1.1, filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.1))" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-4 md:mb-8 inline-block"
                >
                  <solution.icon className="w-8 h-8 md:w-12 md:h-12 text-black dark:text-neon-lime" />
                </m.div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-black dark:text-white">{solution.title}</h3>
                <p className="text-sm md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{solution.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
