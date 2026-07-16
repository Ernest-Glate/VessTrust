export default function sitemap() {
  const baseUrl = "https://vesstrust.com";
  const routes = [
    "",
    "/how-it-works",
    "/for-lenders",
    "/for-individuals",
    "/about",
    "/waitlist",
    "/contact",
    "/privacy",
    "/terms",
    "/regulatory",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
