export default async function sitemap() {
  const baseUrl = "https://techthribe.com/";

  // Replace this with your real blog posts
  // If your posts come from BlogPosts array, you can import it here
  const { BlogPosts } = await import("./data/Blogpost");

  const blogUrls = BlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.linkTitle}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/thribe`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
    },
    ...blogUrls,
    {
      url: `${baseUrl}/legal/membership`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/legal/terms-of-service`,
      lastModified: new Date().toISOString(),
    },
  ];
}
