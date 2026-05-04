import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, AlertCircle, Loader2, MessageCircle, ChevronRight } from "lucide-react";
import { usePost, usePosts } from "../hooks/useWordPress";
import type { WPPost } from "../types/wordpress";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function stripCaption(html: string) {
  // Hilangkan tag HTML tapi pertahankan teks biasa
  return html.replace(/<[^>]*>/g, "").trim();
}

function BacaJugaCard({ post }: { post: WPPost }) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const categories = post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 100);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-4 bg-white rounded-xl border border-blue-100 p-4 hover:border-brand-mid hover:shadow-md transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-brand-light">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-30">
            <svg className="w-8 h-8 text-brand-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        {categories[0] && (
          <span className="inline-block mb-1 px-2 py-0.5 bg-brand-light text-brand-mid text-xs font-medium rounded-full">
            {categories[0]}
          </span>
        )}
        <h4
          className="font-semibold text-brand-dark text-sm leading-snug line-clamp-2 group-hover:text-brand-mid transition-colors mb-1"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p className="text-gray-400 text-xs line-clamp-1">{excerpt}…</p>
        <div className="flex items-center gap-1 mt-1.5 text-brand-mid text-xs font-medium">
          Baca <ChevronRight size={11} />
        </div>
      </div>
    </Link>
  );
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = usePost(slug ?? "");
  const { posts: relatedPosts } = usePosts(1, 6);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-brand-light">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-brand-mid animate-spin" />
          <p className="text-gray-500">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-brand-light">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Artikel tidak ditemukan</h2>
          <p className="text-gray-500 mb-6">{error ?? "Halaman yang Anda cari tidak tersedia."}</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-mid text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const featuredCaption = post._embedded?.["wp:featuredmedia"]?.[0]?.caption?.rendered;
  const categories = post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];

  // Artikel lain untuk "Baca Juga" — kecualikan artikel ini sendiri, ambil 3
  const bacaJuga = relatedPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <div className="bg-brand-dark py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Blog
          </Link>

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="flex items-center gap-1 px-3 py-1 bg-brand-mid/20 text-brand-mid text-xs font-medium rounded-full border border-brand-mid/30"
                >
                  <Tag size={10} />
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-brand-mid flex items-center justify-center text-white text-xs font-bold">
                B
              </div>
              Budi Purnomo
            </span>
          </div>
        </div>
      </div>

      {/* Featured image + caption */}
      {featuredImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <figure>
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
            {featuredCaption && stripCaption(featuredCaption) && (
              <figcaption className="mt-2 px-1 text-xs text-gray-400 italic text-center">
                {stripCaption(featuredCaption)}
              </figcaption>
            )}
          </figure>
        </div>
      )}

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article
          className="wp-content text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Baca Juga */}
        {bacaJuga.length > 0 && (
          <div className="mt-12 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-blue-100" />
              <span className="px-3 py-1 bg-brand-light text-brand-dark text-sm font-semibold rounded-full">
                Baca Juga
              </span>
              <div className="flex-1 h-px bg-blue-100" />
            </div>
            <div className="flex flex-col gap-3">
              {bacaJuga.map((p) => (
                <BacaJugaCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 p-8 bg-brand-light rounded-2xl border border-blue-100 text-center">
          <h3 className="text-xl font-bold text-brand-dark mb-2">
            Ingin bertanya seputar media dan komunikasi?
          </h3>
          <p className="text-gray-600 mb-5">
            Hubungi Budi Purnomo langsung untuk konsultasi soal media,
            komunikasi, dan manajemen reputasi.
          </p>
          <a
            href="https://wa.me/6285315557788"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-mid text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow"
          >
            <MessageCircle size={18} />
            WA: 0853-1555-7788
          </a>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-mid hover:text-brand-dark font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Lihat semua artikel
          </Link>
        </div>
      </div>
    </div>
  );
}
