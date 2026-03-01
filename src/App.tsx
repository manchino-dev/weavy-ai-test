import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

// Lazy-load heavy components that are below the fold
const Solutions = React.lazy(() => import("@/components/Solutions").then(m => ({ default: m.Solutions })));
const Testimonials = React.lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const ContactForm = React.lazy(() => import("@/components/ContactForm").then(m => ({ default: m.ContactForm })));
const LogoTicker = React.lazy(() => import("@/components/LogoTicker").then(m => ({ default: m.LogoTicker })));
const IntegrationTicker = React.lazy(() => import("@/components/IntegrationTicker").then(m => ({ default: m.IntegrationTicker })));
const NodePlayground = React.lazy(() =>
  import("@/components/NodePlayground").then((m) => ({ default: m.NodePlayground }))
);
const Footer = React.lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

function SectionFallback({ text = "Loading…" }: { text?: string }) {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="h-64 rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse flex items-center justify-center">
          <p className="text-zinc-400 dark:text-zinc-600 text-sm">{text}</p>
        </div>
      </div>
    </section>
  );
}

function NodePlaygroundFallback() {
  return (
    <section className="py-32 bg-zinc-100/50 dark:bg-zinc-900/50 transition-colors">
      <div className="max-w-[1920px] mx-auto px-6 text-center">
        <div className="h-[500px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse flex items-center justify-center">
          <p className="text-zinc-400 dark:text-zinc-600 text-sm">Loading playground…</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-black dark:text-zinc-100 selection:bg-neon-yellow dark:selection:bg-neon-lime selection:text-black dark:selection:text-zinc-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <Suspense fallback={<SectionFallback text="Loading solutions…" />}>
          <Solutions />
        </Suspense>

        <Suspense fallback={<NodePlaygroundFallback />}>
          <NodePlayground />
        </Suspense>

        <Suspense fallback={<SectionFallback text="Loading testimonials…" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback text="Loading form…" />}>
          <ContactForm />
        </Suspense>

        <Suspense fallback={<SectionFallback text="Loading partners…" />}>
          <LogoTicker />
        </Suspense>

        <Suspense fallback={<div className="h-16 bg-zinc-950 animate-pulse" />}>
          <IntegrationTicker />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
