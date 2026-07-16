export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://vesstrust.com/sitemap.xml",
  };
}
