import { Linkedin, Instagram, Mail, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 md:py-16 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="col-span-1">
            <div className="text-xl md:text-2xl font-bold tracking-tighter text-black dark:text-white mb-3 md:mb-4">Weavy</div>
            <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
              Transforming your creative vision into scalable workflows with Artistic Intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 col-span-1 sm:col-span-1 md:col-span-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-zinc-200">Company</h4>
              <a href="#" className="text-sm text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-neon-lime transition-colors">About</a>
              <a href="#" className="text-sm text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-neon-lime transition-colors">Contact</a>
              <a href="#" className="text-sm text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-neon-lime transition-colors">FAQ</a>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-zinc-200">Legal</h4>
              <a href="#" className="text-sm text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-neon-lime transition-colors">Privacy</a>
              <a href="#" className="text-sm text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-neon-lime transition-colors">Terms</a>
              <a href="#" className="text-sm text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-neon-lime transition-colors">Cookies</a>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-zinc-200">Connect</h4>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black dark:hover:bg-neon-lime hover:text-white dark:hover:text-black active:bg-black dark:active:bg-neon-lime active:text-white dark:active:text-black transition-all">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black dark:hover:bg-neon-lime hover:text-white dark:hover:text-black active:bg-black dark:active:bg-neon-lime active:text-white dark:active:text-black transition-all">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black dark:hover:bg-neon-lime hover:text-white dark:hover:text-black active:bg-black dark:active:bg-neon-lime active:text-white dark:active:text-black transition-all">
                <Youtube className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" aria-label="Community Chat" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black dark:hover:bg-neon-lime hover:text-white dark:hover:text-black active:bg-black dark:active:bg-neon-lime active:text-white dark:active:text-black transition-all">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" aria-label="Email" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black dark:hover:bg-neon-lime hover:text-white dark:hover:text-black active:bg-black dark:active:bg-neon-lime active:text-white dark:active:text-black transition-all">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs text-zinc-600 dark:text-zinc-500">© {new Date().getFullYear()} Weavy Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-600">Designed by MC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
