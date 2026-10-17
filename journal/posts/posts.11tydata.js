// Applies to every story in this folder. The URL is set in code rather than
// as a template string, because story files skip template processing.
export default {
  layout: "post.njk",
  ogType: "article",
  eleventyComputed: {
    permalink: (data) => `/journal/${data.page.fileSlug}/`,
  },
};
