"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Prevent the browser's instant native jump-to-hash on page load
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.scrollTo(0, 0);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // If the page loaded with a hash (e.g. navigated from /admin to /#about),
    // smoothly scroll to it once Lenis and the layout are ready
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          lenis.scrollTo(target as HTMLElement, { offset: -20, duration: 1.5 });
        }, 100); // small delay ensures layout/images are settled before measuring position
      }
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      const anchor = targetEl.closest('a[href*="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only intercept same-page hash links (e.g. "#about"), not cross-page ones (e.g. "/#about")
      if (!href.startsWith("#")) return;
      if (href === "#") return;

      const destination = document.querySelector(href);
      if (!destination) return;

      e.preventDefault();
      lenis.scrollTo(destination as HTMLElement, { offset: -20, duration: 1.5 });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}