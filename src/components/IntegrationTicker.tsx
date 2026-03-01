
const integrations = [
    { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "WhatsApp", url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
    { name: "Discord", url: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/discord.svg" },
    { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Messenger", url: "https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" },
    { name: "X", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" },
    { name: "Outlook", url: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/microsoft-outlook.svg" },
    { name: "Gmail", url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" },
    { name: "Linear", url: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/linear.svg" },
    { name: "Notion", url: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/notion.svg" },
    { name: "Zoom", url: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/zoom.svg" },
];

export function IntegrationTicker() {
    return (
        <section className="py-8 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors">
            <div className="max-w-[1920px] mx-auto flex items-center gap-12 px-6">
                <div className="flex items-center gap-2 shrink-0">
                    <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-neon-lime rounded-full animate-pulse" />
                    <p className="text-[10px] font-bold font-sans text-zinc-500 dark:text-zinc-500 uppercase tracking-widest whitespace-nowrap">
                        Works in the apps you already use
                    </p>
                </div>

                <div className="relative flex-1 overflow-hidden mask-linear-fade">
                    <div className="integration-ticker-track flex items-center gap-16 py-2">
                        {[...integrations, ...integrations, ...integrations].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 shrink-0 opacity-80 hover:opacity-100 transition-all duration-300"
                            >
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    title={item.name}
                                    width={40}
                                    height={40}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
