import { m } from "motion/react";
import { useState } from "react";
import { Terminal, Brain, Sparkles, Download, ArrowRight, ArrowDown, ChevronRight } from "lucide-react";

const workflowSteps = [
  {
    id: "input",
    label: "INPUT",
    title: "Prompt",
    description: "Natural language creative brief",
    icon: Terminal,
    accent: "#A78BFA",
    img: "/images/hero-input.png",
    detail: "a cinematic city at dusk, neon reflections on rain-soaked cobblestone, volumetric fog...",
  },
  {
    id: "ai",
    label: "AI MODEL",
    title: "Process",
    description: "Multi-model inference pipeline",
    icon: Brain,
    accent: "#D9F99D",
    img: "/images/hero-ai.png",
    detail: "Stable Diffusion XL → ControlNet → Real-ESRGAN upscale chain",
  },
  {
    id: "output",
    label: "OUTPUT",
    title: "Result",
    description: "Publication-ready creative",
    icon: Sparkles,
    accent: "#67E8F9",
    img: "/images/hero-output.png",
    detail: "8K cinematic frame — photorealistic, artifact-free, ready for production",
  },
  {
    id: "export",
    label: "EXPORT",
    title: "Deliver",
    description: "Multi-format batch export",
    icon: Download,
    accent: "#FDE68A",
    img: "/images/hero-export.png",
    detail: "PNG • MP4 • WebP • GLB — optimized for every platform",
  },
];

export function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const visibleStep = hoveredStep ?? activeStep;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 w-full">
        {/* Hero Titles */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start mb-12 md:mb-20"
        >
          <div>
            <h1 className="text-[18vw] sm:text-[14vw] lg:text-[12vw] leading-[0.8] font-medium tracking-tighter text-black dark:text-white mb-4">
              Weavy
            </h1>
          </div>

          <div className="flex flex-col justify-end h-full pt-2 lg:pt-0">
            <h2 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-[0.9] font-medium tracking-tighter text-black dark:text-white mb-4 md:mb-8">
              Artistic Intelligence
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Turn your creative vision into scalable workflows. Access all AI models and professional editing tools in one node based platform.
            </p>
          </div>
        </m.div>

        {/* Workflow Pipeline */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          {/* Pipeline connector bar — desktop only */}
          <div className="hidden lg:flex items-center justify-center gap-0 mb-8 px-12">
            {workflowSteps.map((step, i) => (
              <div key={step.id} className="flex items-center flex-1">
                <m.button
                  onClick={() => setActiveStep(i)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                    style={{
                      borderColor: visibleStep === i ? step.accent : "transparent",
                      backgroundColor: visibleStep === i ? step.accent + "22" : "rgb(228 228 231 / 0.3)",
                    }}
                  >
                    <step.icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: visibleStep === i ? step.accent : "#a1a1aa" }}
                    />
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300"
                    style={{ color: visibleStep === i ? step.accent : "#a1a1aa" }}
                  >
                    {step.label}
                  </span>
                </m.button>
                {i < workflowSteps.length - 1 && (
                  <div className="flex-1 flex items-center px-2 -mt-5">
                    <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700" />
                    <ChevronRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 -mx-1 shrink-0" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile pipeline indicator — horizontal scroll pills */}
          <div className="flex lg:hidden items-center gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {workflowSteps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full shrink-0 transition-all duration-300 text-[10px] font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: visibleStep === i ? step.accent + "22" : "rgb(228 228 231 / 0.15)",
                  color: visibleStep === i ? step.accent : "#a1a1aa",
                  border: visibleStep === i ? `1.5px solid ${step.accent}55` : "1.5px solid transparent",
                }}
              >
                <step.icon className="w-3.5 h-3.5" />
                {step.label}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {workflowSteps.map((step, index) => (
              <m.div
                key={step.id}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer will-change-transform"
              >
                {/* Background image */}
                <m.div
                  className="absolute inset-0 z-0"
                  animate={{
                    scale: visibleStep === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src={step.img}
                    alt={`${step.title} — ${step.description}`}
                    width={600}
                    height={800}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : undefined}
                    className="w-full h-full object-cover"
                  />
                </m.div>

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-[1] transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${visibleStep === index ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.6)"} 0%, rgba(0,0,0,0.1) 50%, transparent 100%)`,
                  }}
                />

                {/* Active glow border */}
                <m.div
                  className="absolute inset-0 z-[2] rounded-xl md:rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: visibleStep === index
                      ? `inset 0 0 0 2px ${step.accent}66, 0 0 40px ${step.accent}20`
                      : "inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 0px transparent",
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Top label */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10 flex items-center gap-2">
                  <span
                    className="text-[8px] md:text-[10px] font-bold tracking-[0.15em] uppercase px-1.5 md:px-2 py-0.5 md:py-1 rounded-full backdrop-blur-sm transition-colors duration-300"
                    style={{
                      color: step.accent,
                      backgroundColor: visibleStep === index ? step.accent + "22" : "rgba(0,0,0,0.3)",
                    }}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Step number badge */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
                  <m.div
                    animate={{
                      backgroundColor: visibleStep === index ? step.accent : "rgba(255,255,255,0.1)",
                      color: visibleStep === index ? "#000" : "#fff",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold backdrop-blur-sm"
                  >
                    {index + 1}
                  </m.div>
                </div>

                {/* Arrow between cards — desktop only */}
                {index < workflowSteps.length - 1 && (
                  <m.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center translate-x-1/2"
                    animate={{
                      opacity: visibleStep === index ? 1 : 0,
                      x: visibleStep === index ? "50%" : "30%",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
                      style={{ backgroundColor: step.accent + "cc" }}
                    >
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </m.div>
                )}

                {/* Mobile: down arrow between row pairs */}
                {index === 1 && (
                  <m.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex lg:hidden items-center translate-y-1/2"
                    animate={{
                      opacity: visibleStep === 1 ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-md bg-zinc-800/80">
                      <ArrowDown className="w-3 h-3 text-white" />
                    </div>
                  </m.div>
                )}

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-3 md:p-5">
                  <m.div
                    animate={{
                      y: visibleStep === index ? 0 : 8,
                      opacity: visibleStep === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-sm md:text-lg font-bold text-white mb-0.5 md:mb-1 flex items-center gap-1.5 md:gap-2">
                      <step.icon className="w-3 h-3 md:w-4 md:h-4 shrink-0" style={{ color: step.accent }} />
                      {step.title}
                    </h3>
                    <p className="text-[10px] md:text-sm text-zinc-300 mb-1 md:mb-3 line-clamp-2">{step.description}</p>
                  </m.div>

                  {/* Expandable detail — hidden on mobile for space, visible on desktop hover/active */}
                  <m.div
                    animate={{
                      height: visibleStep === index ? "auto" : 0,
                      opacity: visibleStep === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden hidden md:block"
                  >
                    <div
                      className="text-xs px-3 py-2 rounded-lg backdrop-blur-sm leading-relaxed font-mono"
                      style={{
                        color: step.accent,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        borderLeft: `2px solid ${step.accent}`,
                      }}
                    >
                      {step.detail}
                    </div>
                  </m.div>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
