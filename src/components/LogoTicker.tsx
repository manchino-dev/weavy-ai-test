const logos = [
  // Cloud & Infrastructure
  { name: "Google AI", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },

  { name: "Microsoft Azure", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
  { name: "IBM Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Cisco", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  // AI / Chips
  { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Anthropic", url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "NVIDIA", url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  { name: "AMD", url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg" },
  // Dev & Tools
  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "LinkedIn", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
];

export function LogoTicker() {
  return (
    <section className="py-12 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] font-bold font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]">Trusted by industry leaders</p>
      </div>

      <div className="relative flex overflow-hidden mask-linear-fade">
        <div className="logo-ticker-track">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-28 h-10 shrink-0 transition-all duration-300 hover:scale-110">
              <img
                src={logo.url}
                alt={logo.name}
                title={logo.name}
                width={112}
                height={40}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain dark:invert dark:opacity-60 dark:hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
