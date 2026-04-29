import { Link } from "react-router-dom";
import {
  MessageCircle,
  Award,
  Newspaper,
  Users,
  TrendingUp,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import { TikTokIcon, InstagramIcon, XIcon, FacebookIcon } from "../components/SocialIcons";
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
];

const experiences = [
  {
    period: "2010 – Sekarang",
    role: "Konsultan Manajemen Reputasi & Komunikasi",
    org: "Independen",
    desc: "Saya mengelola manajemen reputasi dan pemulihan citra sejumlah tokoh nasional, pejabat publik, dan figur korporasi menggunakan pendekatan Image Restoration Theory.",
  },
  {
    period: "2000 – 2010",
    role: "Jurnalis Senior",
    org: "Media Nasional",
    desc: "Saya meliput isu-isu politik, ekonomi, dan sosial di tingkat nasional selama lebih dari satu dekade, sekaligus membangun jaringan luas dengan pemangku kepentingan media.",
  },
  {
    period: "1995 – 2000",
    role: "Reporter & Editor",
    org: "Berbagai Redaksi",
    desc: "Saya memulai karier jurnalistik sebagai reporter lapangan, kemudian berkembang menjadi editor untuk liputan khusus dan investigasi.",
  },
];

const services = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Pemulihan Citra",
    desc: "Strategi berbasis Image Restoration Theory untuk memulihkan reputasi yang terdampak krisis media.",
  },
  {
    icon: <Newspaper className="w-7 h-7" />,
    title: "Manajemen Media",
    desc: "Pengelolaan hubungan media, press release, dan penempatan narasi di media mainstream maupun digital.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Konsultasi Komunikasi",
    desc: "Pendampingan strategi komunikasi publik untuk tokoh, pejabat, dan organisasi.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Pelatihan Jurnalistik",
    desc: "Workshop dan pelatihan teknik komunikasi, penulisan, serta pemahaman ekosistem media bagi tim dan individu.",
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
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-mid rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-mid rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="inline-block mb-4 px-3 py-1 bg-brand-mid/20 text-brand-mid text-sm font-medium rounded-full border border-brand-mid/30">
                Jurnalis & Konsultan Komunikasi
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Budi <span className="text-brand-mid">Purnomo</span>
              </h1>
              <p className="text-blue-200 text-lg md:text-xl leading-relaxed mb-8">
                Saya adalah wartawan dengan pengalaman puluhan tahun, dan telah
                mendampingi pemulihan citra sejumlah tokoh nasional. Di sini saya
                berbagi strategi komunikasi aktual berbasis{" "}
                <em>Image Restoration Theory</em> — untuk membantu Anda menavigasi
                krisis reputasi dengan tepat dan terukur.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="https://wa.me/6285315557788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-brand-mid text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                >
                  <MessageCircle size={18} />
                  Konsultasi via WA
                </a>
                <Link
                  to="/blog"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  Baca Artikel
                  <ChevronRight size={18} />
                </Link>
              </div>

              {/* Social media */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-blue-300 text-sm mr-1">Ikuti saya:</span>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-blue-200 hover:bg-brand-mid hover:text-white transition-colors border border-white/10"
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
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-brand-mid to-brand-dark border-4 border-white/20 overflow-hidden shadow-2xl flex items-center justify-center">
                  <img
                    src="/profile.jpg"
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
      <section className="bg-brand-mid py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
                <p className="text-blue-100 text-sm mt-1">{s.label}</p>
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
                Tentang Saya
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Strategi Komunikasi <br />
                <span className="text-brand-mid">Berbasis Riset & Pengalaman</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Saya, Budi Purnomo, adalah wartawan yang berpengalaman puluhan
                tahun, dan pernah mengelola manajemen reputasi dan pemulihan citra
                sejumlah tokoh nasional.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Melalui situs ini, saya membagikan solusi dan strategi komunikasi
                aktual berdasarkan prinsip-prinsip{" "}
                <strong className="text-brand-dark">
                  "Image Restoration Theory"
                </strong>{" "}
                atau teori pemulihan citra.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Untuk berkonsultasi seputar media dan komunikasi, Anda dapat
                menghubungi saya melalui{" "}
                <strong className="text-brand-dark">
                  WA Center: 0853-1555-7788
                </strong>
                .
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
                Pemulihan citra bukan sekadar strategi PR — ini adalah sains
                komunikasi yang membutuhkan diagnosis tepat dan pendekatan yang
                terukur.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold text-lg">
                  BP
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Budi Purnomo</p>
                  <p className="text-sm text-gray-500">Konsultan Komunikasi & Wartawan Senior</p>
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

      {/* ── Layanan ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-3 py-1 bg-white text-brand-dark text-sm font-medium rounded-full">
              Layanan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Apa yang Saya Tawarkan
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-50 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-light text-brand-mid flex items-center justify-center mb-4 group-hover:bg-brand-mid group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pengalaman ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-3 py-1 bg-brand-light text-brand-dark text-sm font-medium rounded-full">
              Rekam Jejak
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Pengalaman Profesional
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-light hidden sm:block" />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="relative sm:pl-16">
                  <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-brand-mid border-2 border-white shadow-md hidden sm:block" />
                  <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:border-brand-mid transition-colors">
                    <span className="inline-block mb-2 px-2.5 py-0.5 bg-brand-light text-brand-dark text-xs font-medium rounded-full">
                      {exp.period}
                    </span>
                    <h3 className="font-bold text-brand-dark text-lg">{exp.role}</h3>
                    <p className="text-brand-mid text-sm font-medium mb-2">{exp.org}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
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
              href="mailto:info@budipurnomo.id"
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
