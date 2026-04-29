import { useState, useEffect } from "react";
import axios from "axios";
import type { WPPost, WPCategory } from "../types/wordpress";

const WP_BASE = import.meta.env.VITE_WP_URL || "https://your-wordpress-site.com";
const API = `${WP_BASE}/wp-json/wp/v2`;

export function usePosts(page = 1, perPage = 9) {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get<WPPost[]>(`${API}/posts`, {
        params: { page, per_page: perPage, _embed: true },
      })
      .then((res) => {
        setPosts(res.data);
        setTotalPages(Number(res.headers["x-wp-totalpages"] || 1));
        setError(null);
      })
      .catch(() => setError("Gagal memuat artikel. Periksa koneksi WordPress."))
      .finally(() => setLoading(false));
  }, [page, perPage]);

  return { posts, totalPages, loading, error };
}

export function usePost(slug: string) {
  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    axios
      .get<WPPost[]>(`${API}/posts`, { params: { slug, _embed: true } })
      .then((res) => {
        setPost(res.data[0] ?? null);
        setError(null);
      })
      .catch(() => setError("Artikel tidak ditemukan."))
      .finally(() => setLoading(false));
  }, [slug]);

  return { post, loading, error };
}

export function useCategories() {
  const [categories, setCategories] = useState<WPCategory[]>([]);

  useEffect(() => {
    axios
      .get<WPCategory[]>(`${API}/categories`, { params: { per_page: 20 } })
      .then((res) => setCategories(res.data))
      .catch(() => {});
  }, []);

  return { categories };
}
