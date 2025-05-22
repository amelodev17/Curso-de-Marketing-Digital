import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-marketing-blue-900 text-white flex flex-col items-center gap-4">
      <div className="flex gap-6 mb-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:scale-110 transition-transform duration-200"
        >
          <Instagram size={28} />
        </a>

        {/* X icon with custom SVG */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="hover:scale-110 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 50 50"
            fill="currentColor"
          >
            <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
          </svg>
        </a>

        {/* TikTok icon with custom SVG */}
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:scale-110 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
          </svg>
        </a>


        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:scale-110 transition-transform duration-200"
        >
          <Facebook size={28} />
        </a>
      </div>
      <div className="text-sm text-white/70 text-center">
        feito por{" "}
        <a
          href="https://amelfodev.com"
          className="underline hover:text-yellow-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          ameloFdev
        </a>
      </div>
    </footer>
  );
};
