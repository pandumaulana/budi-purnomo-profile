import { Link } from "react-router-dom";
import { Calendar, ChevronRight, ArrowRight, Loader2 } from "lucide-react";
import { usePosts } from "../hooks/useWordPress";
import type { WPPost } from "../types/wordpress";

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post }: { post: WPPost }) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const categories = post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 120);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-lg hover:border-brand-mid transition-all duration-200"
    >
      <div className="relative h-44 bg-brand-light overflow-hidden flex-shrink-0">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-30">
            <svg className="w-14 h-14 text-brand-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {categories[0] && (
          <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-brand-mid text-white text-xs font-medium rounded-full">
            {categories[0]}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
          <Calendar size={11} />
          <span>{formatDate(post.date)}</span>
        </div>
        <h3
          className="font-bold text-brand-dark text-base leading-snug mb-2 group-hover:text-brand-mid transition-colors line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2">{excerpt}…</p>
        <div className="flex items-center gap-1 mt-4 text-brand-mid text-sm font-semibold">
          Baca selengkapnya <ChevronRight size={13} />
        </div>
      </div>
    </Link>
  );
}

export function LatestPosts() {
  const { posts, loading, error } = usePosts(1, 6);

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block mb-3 px-3 py-1 bg-white text-brand-dark text-sm font-medium rounded-full">
              Artikel Terbaru
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Insight & Strategi Komunikasi
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white rounded-xl font-semibold hover:bg-blue-900 transition-colors flex-shrink-0"
          >
            Lihat semua <ArrowRight size={16} />
          </Link>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16 gap-3 text-gray-400">
            <Loader2 className="animate-spin" size={20} />
            <span>Memuat artikel...</span>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-12 px-4 bg-white rounded-2xl border border-blue-100">
            <p className="text-gray-500 mb-2">WordPress belum terhubung.</p>
            <p className="text-sm text-gray-400">
              Atur <code className="bg-brand-light px-1.5 py-0.5 rounded font-mono text-brand-dark">VITE_WP_URL</code> di file{" "}
              <code className="bg-brand-light px-1.5 py-0.5 rounded font-mono text-brand-dark">.env</code> untuk menampilkan artikel.
            </p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-dark text-white rounded-xl font-semibold hover:bg-blue-900 transition-colors"
              >
                Lihat semua artikel <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
