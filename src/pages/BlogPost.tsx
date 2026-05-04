import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { usePost } from "../hooks/useWordPress";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = usePost(slug ?? "");

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
  const categories = post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];

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

      {/* Featured image */}
      {featuredImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      )}

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article
          className="wp-content text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-brand-light rounded-2xl border border-blue-100 text-center">
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
