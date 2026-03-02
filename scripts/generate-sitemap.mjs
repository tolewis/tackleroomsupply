import { readdirSync, statSync, writeFileSync } from "fs";
import { join, relative } from "path";

const BASE_URL = "https://tackleroomsupply.com";
const OUT_DIR = join(process.cwd(), "out");

function getPages(dir, pages = []) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      // Skip studio, _next, and hidden dirs
      if (entry.startsWith("_") || entry.startsWith(".") || entry === "studio") continue;
      getPages(fullPath, pages);
    } else if (entry === "index.html") {
      const relPath = relative(OUT_DIR, dir);
      const urlPath = relPath ? `/${relPath}/` : "/";
      pages.push(urlPath);
    }
  }
  return pages;
}

try {
  const pages = getPages(OUT_DIR);
  const today = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  writeFileSync(join(OUT_DIR, "sitemap.xml"), sitemap);
  console.log(`Generated sitemap.xml with ${pages.length} pages`);
} catch (e) {
  console.error("Sitemap generation failed:", e.message);
  process.exit(1);
}
