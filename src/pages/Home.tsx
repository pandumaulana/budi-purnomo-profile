import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight, Mail, Phone } from "lucide-react";
import {
  TikTokIcon,
  InstagramIcon,
  XIcon,
  FacebookIcon,
  YouTubeIcon,
} from "../components/SocialIcons";
import { LatestPosts } from "../components/LatestPosts";

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@budipurnomocom",
    icon: <TikTokIcon size={18} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/budipurnomocom",
    icon: <InstagramIcon size={18} />,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/budipurnomoid",
    icon: <XIcon size={18} />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/budipurnomoid",
    icon: <FacebookIcon size={18} />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: <YouTubeIcon size={18} />,
  },
];

const stats = [
  { value: "30+", label: "Tahun Pengalaman" },
  { value: "50+", label: "Tokoh Nasional Dilayani" },
  { value: "100+", label: "Kasus Pemulihan Citra" },
  { value: "500+", label: "Artikel Dipublikasikan" },
];

export function Home() {
  return (
    <div className="flex-1">
      {/* ── Hero ── */}
      <section className="relative bg-brand-mid overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="inline-block mb-4 px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30">
                Praktisi Media dan Komunikasi
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Budi Purnomo</span>{" "}
                <span className="text-brand-dark">Karjodihardjo</span>
              </h1>
              <div className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 space-y-3">
                <p>
                  Budi Purnomo adalah wartawan yang berpengalaman puluhan tahun,
                  dan pernah mengelola manajemen reputasi untuk pemulihan citra
                  sejumlah tokoh nasional.
                </p>
                <p>
                  Melalui situs ini, ia membagikan solusi, strategi, dan
                  pandangan komunikasinya berdasarkan prinsip-prinsip teori dan
                  praktek di lapangan.
                </p>
                <p>
                  Untuk berkonsultasi mengenai seputar media dan komunikasi,
                  dapat menghubungi{" "}
                  <a
                    href="https://wa.me/6285315557788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 hover:text-white transition-colors"
                  >
                    WhatsApp Center
                  </a>
                  .
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="https://wa.me/6285315557788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-xl font-semibold hover:bg-blue-950 transition-colors shadow-lg"
                >
                  <MessageCircle size={18} />
                  Konsultasi via WA
                </a>
                <Link
                  to="/blog"
                  className="flex items-center gap-2 px-6 py-3 bg-white/15 text-white rounded-xl font-semibold hover:bg-white/25 transition-colors border border-white/30"
                >
                  Baca Artikel
                  <ChevronRight size={18} />
                </Link>
              </div>

              {/* Social media */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white/70 text-sm mr-1">Ikuti saya:</span>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 text-white/80 hover:bg-brand-dark hover:text-white transition-colors border border-white/20"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Profile photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-white/20 to-brand-dark border-4 border-white/30 overflow-hidden shadow-2xl flex items-center justify-center">
                  <img
                    src="/profil.jpeg"
                    alt="Budi Purnomo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = "none";
                      el.parentElement!.innerHTML = `
                        <div class="flex flex-col items-center justify-center w-full h-full text-white/60">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                          <span class="text-sm">Foto Profil</span>
                        </div>`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-xl">
                  <p className="text-brand-dark font-bold text-sm">30+ Tahun</p>
                  <p className="text-gray-500 text-xs">Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-brand-dark py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
                <p className="text-blue-300 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tentang Saya ── */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-3 px-3 py-1 bg-brand-light text-brand-dark text-sm font-medium rounded-full">
                Tentang Budi Purnomo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Praktisi Media <br />
                <span className="text-brand-mid">dan Komunikasi</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pada saat kuliah, Budi Purnomo adalah koresponden berbagai surat
                kabar, hingga akhirnya menjadi wartawan profesional di Harian
                Surya, Pers Daerah Kelompok Kompas Gramedia (KKG) 1989–1994.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Setelahnya, ia mengelola majalah finansial Uang &amp; Efek yang
                kemudian berubah menjadi Majalah Investor, hingga tahun 2000.
                Kemudian ia menjadi pimpinan majalah mingguan investasi
                Prospektif hingga 2006, sambil mengelola sejumlah tabloid bisnis
                dan surat kabar ekonomi hingga 2016.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Di bidang komunikasi, pada Juli 2012 ia ditunjuk menjadi{" "}
                <a
                  href="https://share.google/NzvUTRUG4gamMMaLR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-mid hover:underline font-medium"
                >
                  Koordinator Media Center
                </a>{" "}
                Tim Kampanye Joko Widodo – Basuki Tjahaja Purnama untuk Pilgub
                DKI Jakarta. Pada September 2013 menjadi Koordinator Prabowo
                Media Center, dan Mei 2014 menjadi{" "}
                <a
                  href="https://m.antaranews.com/berita/437892/rumah-pemenangan-prabowo-hatta-diteror?page=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-mid hover:underline font-medium"
                >
                  Direktur Media Center Timkamnas
                </a>{" "}
                Prabowo–Hatta untuk Pilpres RI. Pada September 2018, ia
                mendampingi Hashim Djojohadikusumo sebagai{" "}
                <a
                  href="https://www.antaranews.com/berita/751742/budi-purnomo-dampingi-hashim-pimpin-media-center-prabowo-sandiaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-mid hover:underline font-medium"
                >
                  Wakil Direktur Media Center Timnas
                </a>{" "}
                Prabowo–Sandiaga.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Langkahnya di bidang media dan komunikasi sempat terhenti karena
                sakit, namun dalam keterbatasannya ia berjuang keras dengan
                penuh semangat untuk bangkit kembali.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Kini ia kembali berkiprah — bukan hanya menulis berita, tetapi
                juga membantu sejumlah korporasi yang mengalami persoalan
                komunikasi melalui publikasi pers rilis di ratusan portal berita
                dalam dan luar negeri. Melalui{" "}
                <a href="https://persrilis.com" target="_blank" rel="noopener noreferrer" className="text-brand-mid hover:underline font-medium">Persrilis.com</a>
                {" "}dan{" "}
                <a href="https://prorilis.com" target="_blank" rel="noopener noreferrer" className="text-brand-mid hover:underline font-medium">Prorilis.com</a>
                , ia mengelola sekitar 200 portal berita — termasuk{" "}
                <a href="https://hallo.id" target="_blank" rel="noopener noreferrer" className="text-brand-mid hover:underline font-medium">Hallo.id</a>,{" "}
                <a href="https://24jamnews.com" target="_blank" rel="noopener noreferrer" className="text-brand-mid hover:underline font-medium">24jamnews.com</a>,{" "}
                <a href="https://indonesiaraya.co.id" target="_blank" rel="noopener noreferrer" className="text-brand-mid hover:underline font-medium">Indonesiaraya.co.id</a>,{" "}
                <a href="https://bisnisnews.com" target="_blank" rel="noopener noreferrer" className="text-brand-mid hover:underline font-medium">Bisnisnews.com</a>,
                {" "}dan sebagainya.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6285315557788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                >
                  <Phone size={16} />
                  0853-1555-7788
                </a>
                <Link
                  to="/blog"
                  className="flex items-center gap-2 px-5 py-2.5 border-2 border-brand-dark text-brand-dark rounded-lg font-semibold hover:bg-brand-light transition-colors"
                >
                  Baca Artikel
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-brand-light rounded-2xl p-8 border border-blue-100">
              <div className="text-6xl text-brand-mid font-serif leading-none mb-4">"</div>
              <blockquote className="text-brand-dark text-xl font-medium leading-relaxed mb-6 italic">
                Pemulihan citra bukan sekedar strategi PR — manajemen reputasi
                adalah sains komunikasi yang membutuhkan diagnosis tepat dan
                pendekatan yang terukur.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Budi Purnomo Karjodihardjo</p>
                  <p className="text-sm text-gray-500">Praktisi Media dan Komunikasi</p>
                </div>
              </div>
              {/* Social in about card */}
              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-blue-200">
                <span className="text-gray-500 text-sm">Ikuti:</span>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white text-brand-dark hover:bg-brand-mid hover:text-white transition-colors shadow-sm"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Artikel Terbaru dari WordPress ── */}
      <LatestPosts />

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-mid rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Butuh Konsultasi Komunikasi?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Hubungi saya langsung untuk mendiskusikan strategi komunikasi dan
            pemulihan citra yang tepat untuk situasi Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://wa.me/6285315557788"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 bg-brand-mid text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg text-lg"
            >
              <MessageCircle size={20} />
              WhatsApp: 0853-1555-7788
            </a>
            <a
              href="mailto:hallobudipurnomo@gmail.com"
              className="flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/20 text-lg"
            >
              <Mail size={20} />
              Email Saya
            </a>
          </div>
          {/* Social links in CTA */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-blue-300 text-sm">Media sosial:</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-blue-200 hover:bg-brand-mid hover:text-white transition-colors border border-white/10"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
