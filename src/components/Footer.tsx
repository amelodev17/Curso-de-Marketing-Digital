
import { Instagram, Facebook, X } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full mt-16 py-8 bg-marketing-blue-900 text-white flex flex-col items-center gap-4">
      <div className="flex gap-6 mb-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform duration-200">
          <Instagram size={28} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:scale-110 transition-transform duration-200">
          <X size={28} />
        </a>
        {/* TikTok - SVG inline icon */}
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:scale-110 transition-transform duration-200">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 2.5v11.25a3.75 3.75 0 1 1-3.75-3.75c.089 0 .177.004.264.011v-2.06A6 6 0 1 0 18 13.75V6.369a5.56 5.56 0 0 1-3-.846z" fill="currentColor"/>
            <path d="M15 2.5v4.75c1.109.7 2.015.919 3 .919V6.369a5.56 5.56 0 0 1-3-.846z" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform duration-200">
          <Facebook size={28} />
        </a>
      </div>
      <div className="text-sm text-white/70">
        feito por{" "}
        <a 
          href="https://amelfdev.com"
          className="underline hover:text-yellow-400"
          target="_blank" 
          rel="noopener noreferrer"
        >
          amelFdev
        </a>
      </div>
    </footer>
  );
};
