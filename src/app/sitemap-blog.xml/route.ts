import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // 1h

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rtnglobal.site";
  const lastModified = new Date();

  const posts = await fetchWithTimeout(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, 8000);
  if (!posts) return [];

  return posts.map((post: { slug: string; publishedAt?: string }) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : lastModified,
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));
}

// helper
async function fetchWithTimeout(url: string, ms = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return res.json();
  } catch {
    clearTimeout(timeout);
    return null;
  }
}
