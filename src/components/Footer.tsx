import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";
import { TikTokIcon, InstagramIcon, XIcon, FacebookIcon } from "./SocialIcons";

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@budipurnomocom", icon: <TikTokIcon size={16} /> },
  { label: "Instagram", href: "https://instagram.com/budipurnomocom", icon: <InstagramIcon size={16} /> },
  { label: "X", href: "https://x.com/budipurnomoid", icon: <XIcon size={16} /> },
  { label: "Facebook", href: "https://facebook.com/budipurnomoid", icon: <FacebookIcon size={16} /> },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Budi Purnomo"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="font-bold text-white text-lg">Budi Purnomo</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Wartawan senior & konsultan manajemen reputasi. Ahli pemulihan
              citra berbasis <em>Image Restoration Theory</em>.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-blue-200 hover:bg-brand-mid hover:text-white transition-colors"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#tentang" className="hover:text-white transition-colors">
                  Tentang Saya
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/6285315557788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle size={15} />
                  WA Center: 0853-1555-7788
                </a>
              </li>
              <li>
                <a
                  href="mailto:hallobudipurnomo@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={15} />
                  hallobudipurnomo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Budi Purnomo. Hak cipta dilindungi.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>Strategi komunikasi berbasis <em>Image Restoration Theory</em></p>
            <span className="hidden sm:block text-white/20">·</span>
            <p>
              In association with{" "}
              <a
                href="https://pandumaulana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
              >
                pandumaulana.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
