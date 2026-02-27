import { Menu, X } from "lucide-react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      {/* Top Banner */}
      <div className="bg-black dark:bg-neon-lime text-white dark:text-black text-[9px] md:text-xs py-1.5 md:py-2 text-center font-medium tracking-wide transition-colors">
        DESIGNED BY MC
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-8">
          <a href="#" className="text-lg md:text-2xl font-bold tracking-tighter text-black dark:text-white uppercase border-r border-zinc-300 dark:border-zinc-700 pr-3 md:pr-6 h-8 flex items-center">
            Weavy
          </a>
          <span className="text-[9px] md:text-xs font-medium tracking-widest text-zinc-500 dark:text-zinc-400 uppercase leading-tight max-w-[80px] md:max-w-[100px]">
            Artistic Intelligence
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <a href="#features" className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-neon-yellow/90 dark:hover:bg-neon-lime/90 hover:text-black px-4 py-3 rounded-full uppercase tracking-wider transition-all duration-200">
            Features
          </a>
          <a href="#solutions" className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-neon-yellow/90 dark:hover:bg-neon-lime/90 hover:text-black px-4 py-3 rounded-full uppercase tracking-wider transition-all duration-200">
            Solutions
          </a>
          <a href="#testimonials" className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-neon-yellow/90 dark:hover:bg-neon-lime/90 hover:text-black px-4 py-3 rounded-full uppercase tracking-wider transition-all duration-200">
            Testimonials
          </a>
          <a href="#contact" className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-neon-yellow/90 dark:hover:bg-neon-lime/90 hover:text-black px-4 py-3 rounded-full uppercase tracking-wider transition-all duration-200">
            Contact
          </a>
          <ThemeToggle />
          <Button className="ml-2 bg-black dark:bg-neon-lime text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-neon-lime/80 font-bold rounded-full px-6 h-10 text-xs uppercase tracking-wider transition-colors">
            Get Started
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-black dark:text-white p-2 -mr-2 active:bg-zinc-200 dark:active:bg-zinc-800 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="mobile-menu-grid md:hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800"
        data-open={isOpen}
      >
        <div>
          <div className="flex flex-col p-4 sm:p-6 gap-1">
            <a href="#features" className="text-sm font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider py-3 px-3 rounded-lg active:bg-zinc-100 dark:active:bg-zinc-900 transition-colors" onClick={closeMenu}>
              Features
            </a>
            <a href="#solutions" className="text-sm font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider py-3 px-3 rounded-lg active:bg-zinc-100 dark:active:bg-zinc-900 transition-colors" onClick={closeMenu}>
              Solutions
            </a>
            <a href="#testimonials" className="text-sm font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider py-3 px-3 rounded-lg active:bg-zinc-100 dark:active:bg-zinc-900 transition-colors" onClick={closeMenu}>
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium text-zinc-900 dark:text-zinc-100 uppercase tracking-wider py-3 px-3 rounded-lg active:bg-zinc-100 dark:active:bg-zinc-900 transition-colors" onClick={closeMenu}>
              Contact
            </a>
            <Button className="w-full mt-2 bg-black dark:bg-neon-lime text-white dark:text-black hover:bg-zinc-800 font-bold rounded-xl h-12 transition-colors">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
