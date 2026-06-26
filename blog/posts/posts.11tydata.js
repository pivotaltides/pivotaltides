/* Shared settings for every blog post in this folder.
   Each markdown file becomes a page at /blog/<filename>/.
   Posts marked `draft: true` are NOT given a URL, so they are not
   published at all (no page, not in the sitemap, not crawlable). */
module.exports = {
  layout: "post.njk",
  eleventyComputed: {
    permalink: (data) =>
      data.draft ? false : `/blog/${data.page.fileSlug}/`,
    eleventyExcludeFromCollections: (data) => !!data.draft,
  },
};
