"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site, telHref } from "@/lib/content";

/**
 * Fixed navbar, matched to the reference implementation:
 * - top of page: transparent, 20px vertical padding (96px tall on desktop)
 * - scrolled past 20px: 90% white + backdrop blur + shadow-md, 12px padding (80px)
 * - links fade down in sequence on load; the phone pill scales in last
 * - mobile: hamburger opens a full-height white panel below the bar
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // correct state when the page loads already scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 py-3 shadow-md backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={site.logo.src}
              alt="MR Services Logo"
              width={site.logo.width}
              height={site.logo.height}
              priority
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.08 * i }}
              >
                <a
                  href={link.href}
                  className="group relative text-sm font-semibold text-ink-soft transition-colors hover:text-primary"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <a
                href={telHref}
                className="flex items-center space-x-2 rounded-full bg-primary px-5 py-2.5 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-primary-dark hover:shadow-primary/20 active:scale-95"
              >
                <Phone size={18} />
                <span>{site.phone}</span>
              </a>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            type="button"
            className="text-primary md:hidden"
            onClick={() => setOpen((o) => !o)}
            whileTap={{ scale: 0.9 }}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-nav z-40 overflow-hidden bg-white md:hidden"
          >
            <div className="flex flex-col space-y-6 p-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, delay: 0.08 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-2xl font-bold text-slate-800 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <a
                  href={telHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center space-x-2 rounded-xl bg-primary p-4 text-xl font-bold text-white"
                >
                  <Phone size={24} />
                  <span>Call Now</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
