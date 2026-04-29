import { Link } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";
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

interface Props {
  post: WPPost;
}

export function BlogCard({ post }: Props) {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const categories =
    post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) ?? [];
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 150);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-md hover:border-brand-mid transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-brand-light overflow-hidden flex-shrink-0">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-brand-mid opacity-40">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
        {categories.length > 0 && (
          <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-brand-mid text-white text-xs font-medium rounded-full">
            {categories[0]}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
          <Calendar size={12} />
          <span>{formatDate(post.date)}</span>
        </div>
        <h3
          className="font-bold text-brand-dark text-lg leading-snug mb-2 group-hover:text-brand-mid transition-colors line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">{excerpt}…</p>
        <div className="flex items-center gap-1 mt-4 text-brand-mid text-sm font-semibold">
          Baca selengkapnya <ChevronRight size={14} />
        </div>
      </div>
    </Link>
  );
}
