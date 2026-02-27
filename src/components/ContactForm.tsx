import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { m, AnimatePresence } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  }, []);

  const handleReset = useCallback(() => setIsSubmitted(false), []);

  return (
    <section id="contact" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-3 md:mb-4 text-black dark:text-white">
            Ready to start creating?
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Join the waitlist and get early access to the future of design.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <m.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6 bg-white dark:bg-zinc-900 p-5 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2 group">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-focus-within:text-black dark:group-focus-within:text-neon-lime transition-colors">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full h-12 px-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-neon-lime focus:ring-2 focus:ring-black/5 dark:focus:ring-neon-lime/20 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2 group">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-focus-within:text-black dark:group-focus-within:text-neon-lime transition-colors">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full h-12 px-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-neon-lime focus:ring-2 focus:ring-black/5 dark:focus:ring-neon-lime/20 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2 group">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-focus-within:text-black dark:group-focus-within:text-neon-lime transition-colors">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-neon-lime focus:ring-2 focus:ring-black/5 dark:focus:ring-neon-lime/20 transition-all resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-base"
                    placeholder="Tell us about your use case..."
                  />
                </div>

                <Button
                  disabled={isSubmitting}
                  className="w-full h-12 md:h-14 text-base md:text-lg bg-black dark:bg-neon-lime text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-neon-lime/80 font-bold rounded-xl transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <m.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-5 h-5" />
                    </m.div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </m.form>
            ) : (
              <m.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-2xl md:rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 dark:bg-neon-lime/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-600 dark:text-neon-lime" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">You're on the list!</h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                  Thanks for joining. We'll reach out soon with your early access invitation.
                </p>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="mt-6 md:mt-8 rounded-xl dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  Send another message
                </Button>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
