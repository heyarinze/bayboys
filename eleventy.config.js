import sections from "./_data/sections.js";

export default function (eleventyConfig) {
  // A story with `draft: true` shows up with `npm start` but is never built
  // for the live site.
  eleventyConfig.addPreprocessor("drafts", "md", (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // Site files are listed by name so a stray image dropped in the folder
  // isn't published by accident. Originals live in source/, unpublished.
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("icon-192.png");
  eleventyConfig.addPassthroughCopy("logo-white.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("og.png");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.ignores.add("README.md");

  // Newest first
  eleventyConfig.addCollection("journal", (api) =>
    api.getFilteredByGlob("journal/posts/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("inSection", (posts, slug) =>
    posts.filter((post) => post.data.section === slug)
  );
  eleventyConfig.addFilter("sectionName", (slug) => {
    const match = sections.find((s) => s.slug === slug);
    return match ? match.name : slug;
  });
  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(date)
  );
  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));

  return {
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    // Story bodies come from the editor; don't run them through Nunjucks,
    // so a stray "{{" in an article can't break the build.
    markdownTemplateEngine: false,
  };
}
