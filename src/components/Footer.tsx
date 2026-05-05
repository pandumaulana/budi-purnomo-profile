import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";
import { TikTokIcon, InstagramIcon, XIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons";

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@budipurnomocom", icon: <TikTokIcon size={16} /> },
  { label: "Instagram", href: "https://instagram.com/budipurnomocom", icon: <InstagramIcon size={16} /> },
  { label: "X", href: "https://x.com/budipurnomoid", icon: <XIcon size={16} /> },
  { label: "Facebook", href: "https://facebook.com/budipurnomoid", icon: <FacebookIcon size={16} /> },
  { label: "YouTube", href: "https://youtube.com", icon: <YouTubeIcon size={16} /> },
];

// Baris 1: hanya dua tautan utama
const mainLinks = [
  { label: "Tentang Budi Purnomo", href: "/#tentang", internal: true },
  { label: "Blog", href: "/blog", internal: true },
];

// Baris 2: portal & mitra
const portalLinks = [
  { label: "SapuLangit Media Center", href: "https://jasapr.sapulangit.com/", internal: false },
  { label: "Persrilis.com", href: "https://persrilis.com", internal: false },
  { label: "Prorilis.com", href: "https://prorilis.com", internal: false },
  { label: "Hallo.id", href: "https://hallo.id", internal: false },
  { label: "24jamnews.com", href: "https://24jamnews.com", internal: false },
  { label: "Indonesiaraya.co.id", href: "https://indonesiaraya.co.id", internal: false },
  { label: "Bisnisnews.com", href: "https://bisnisnews.com", internal: false },
];

function NavLink({ link, separator }: { link: { label: string; href: string; internal: boolean }; separator: boolean }) {
  const cls = "hover:text-white transition-colors";
  return (
    <span className="flex items-center">
      {separator && <span className="mx-2 text-white/30">●</span>}
      {link.internal
        ? <Link to={link.href} className={cls}>{link.label}</Link>
        : <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>{link.label}</a>
      }
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand & info */}
        <div className="text-center mb-8">
          {/* Logo + nama — text-lg sama dengan Budi Purnomo */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/update.jpeg"
              alt="Budi Purnomo"
              className="h-9 w-9 rounded-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <span className="font-bold text-white text-xl">Budi Purnomo</span>
          </div>
          {/* Deskripsi — text-base */}
          <p className="text-base leading-relaxed mb-5 max-w-md mx-auto">
            Wartawan senior & konsultan manajemen reputasi. Ahli pemulihan
            citra berbasis <em>Image Restoration Theory</em>.
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-2 mb-6">
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

          {/* Kontak — heading text-lg sama dengan Budi Purnomo */}
          <p className="font-bold text-white text-xl mb-3">Kontak</p>
          {/* Link kontak — text-base */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base">
            <a
              href="https://wa.me/6285315557788"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageCircle size={15} />
              WA Center: 0853-1555-7788
            </a>
            <a
              href="mailto:hallobudipurnomo@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={15} />
              hallobudipurnomo@gmail.com
            </a>
          </div>
        </div>

        {/* Navigasi — heading text-lg sama dengan Budi Purnomo */}
        <div className="border-t border-white/10 pt-6 mb-4">
          <p className="text-center font-bold text-white text-xl mb-3">Navigasi</p>

          {/* Baris 1: Tentang Budi Purnomo ● Blog */}
          <div className="flex flex-wrap justify-center items-center gap-y-1 text-base text-blue-200 mb-2">
            {mainLinks.map((link, i) => (
              <NavLink key={link.label} link={link} separator={i > 0} />
            ))}
          </div>

          {/* Baris 2: SapuLangit dst */}
          <div className="flex flex-wrap justify-center items-center gap-y-1 text-base text-blue-200">
            {portalLinks.map((link, i) => (
              <NavLink key={link.label} link={link} separator={i > 0} />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-blue-300 pt-4 border-t border-white/10">
          <p>
            © {new Date().getFullYear()} Budi Purnomo. Hak cipta dilindungi. · In association with{" "}
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
    </footer>
  );
}
