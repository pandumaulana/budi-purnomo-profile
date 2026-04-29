import { useState } from "react";
import { ChevronLeft, ChevronRight, AlertCircle, Loader2 } from "lucide-react";
import { usePosts } from "../hooks/useWordPress";
import { BlogCard } from "../components/BlogCard";

export function Blog() {
  const [page, setPage] = useState(1);
  const { posts, totalPages, loading, error } = usePosts(page, 9);

  return (
    <div className="flex-1 bg-brand-light min-h-screen">
      {/* Header */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-3 px-3 py-1 bg-brand-mid/20 text-brand-mid text-sm font-medium rounded-full border border-brand-mid/30">
            Blog & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Strategi Komunikasi &<br className="hidden sm:block" /> Pemulihan Citra
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Artikel, analisis, dan wawasan seputar manajemen reputasi, komunikasi
            publik, dan dunia jurnalistik dari Budi Purnomo.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-10 h-10 text-brand-mid animate-spin" />
            <p className="text-gray-500">Memuat artikel...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="max-w-lg mx-auto py-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-brand-dark mb-2">
              WordPress belum terhubung
            </h3>
            <p className="text-gray-500 mb-4">{error}</p>
            <p className="text-sm text-gray-400">
              Atur <code className="bg-white px-1.5 py-0.5 rounded text-brand-dark font-mono">VITE_WP_URL</code> di file{" "}
              <code className="bg-white px-1.5 py-0.5 rounded text-brand-dark font-mono">.env</code> menuju URL WordPress Anda.
            </p>
          </div>
        )}

        {/* Posts grid */}
        {!loading && !error && posts.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-blue-100 text-brand-dark font-medium text-sm hover:border-brand-mid transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                  Sebelumnya
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                        p === page
                          ? "bg-brand-mid text-white"
                          : "bg-white border border-blue-100 text-brand-dark hover:border-brand-mid"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-blue-100 text-brand-dark font-medium text-sm hover:border-brand-mid transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Berikutnya
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty state */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">Belum ada artikel dipublikasikan.</p>
          </div>
        )}
      </div>
    </div>
  );
}
