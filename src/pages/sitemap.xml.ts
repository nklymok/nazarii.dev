// Sitemap built from the pages that exist, so new blog posts show up on their own.
const site = "https://nazarii.dev";

export function GET() {
  const posts = Object.keys(import.meta.glob("./blog/*.md")).map((f) => `/blog/${f.split("/").pop()!.replace(/\.md$/, "")}/`);
  const alt = `<xhtml:link rel="alternate" hreflang="en" href="${site}/"/><xhtml:link rel="alternate" hreflang="uk" href="${site}/uk/"/>`;
  const urls = [
    `<url><loc>${site}/</loc>${alt}</url>`,
    `<url><loc>${site}/uk/</loc>${alt}</url>`,
    `<url><loc>${site}/blog/</loc></url>`,
    ...posts.map((p) => `<url><loc>${site}${p}</loc></url>`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
