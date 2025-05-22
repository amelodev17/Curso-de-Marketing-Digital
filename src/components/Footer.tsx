import { Instagram, Facebook, X } from "lucide-react";
export const Footer = () => {
  return <footer className="w-full py-8 bg-marketing-blue-900 text-white flex flex-col items-center gap-4">
      <div className="flex gap-6 mb-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform duration-200">
          <Instagram size={28} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:scale-110 transition-transform duration-200">
          <X size={28} className="<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0 0 50 50\">\n<path d=\"M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z\"></path>\n</svg>)" />
        </a>
        {/* TikTok - SVG inline icon */}
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:scale-110 transition-transform duration-200">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="the svg must be of the tik tok simbol">
            <path d="M15 2.5v11.25a3.75 3.75 0 1 1-3.75-3.75c.089 0 .177.004.264.011v-2.06A6 6 0 1 0 18 13.75V6.369a5.56 5.56 0 0 1-3-.846z" fill="currentColor" />
            <path d="M15 2.5v4.75c1.109.7 2.015.919 3 .919V6.369a5.56 5.56 0 0 1-3-.846z" fill="currentColor" />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform duration-200">
          <Facebook size={28} />
        </a>
      </div>
      <div className="text-sm text-white/70 text-center">
        feito por{" "}
        <a href="https://amelfdev.com" className="underline hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
          amelFdev
        </a>
      </div>
    </footer>;
};