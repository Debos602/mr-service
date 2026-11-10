"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/lib/content";

/**
 * Floating WhatsApp button. As on the reference, it only appears once the
 * page is scrolled past 300px, popping in from below (scale 0.5 → 1).
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group fixed right-8 bottom-8 z-[100] rounded-full bg-whatsapp p-4 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
        >
          <span aria-hidden className="pointer-events-none absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp" />
          <span aria-hidden className="pointer-events-none absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp [animation-delay:0.6s]" />
          <span className="pointer-events-none absolute -top-12 right-0 rounded-xl border border-line-soft bg-white px-4 py-2 text-xs font-black whitespace-nowrap text-slate-800 italic opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
            Need Help? Chat Now!
          </span>
          <WhatsAppIcon className="relative z-10 h-8 w-8" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
