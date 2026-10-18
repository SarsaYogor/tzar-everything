module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "files": "files" });
  eleventyConfig.addFilter("readableDate", (date) => new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date));
  return { pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/", dir: { input: ".", includes: "_includes", output: "_site" }, templateFormats: ["md", "njk"], markdownTemplateEngine: "njk", htmlTemplateEngine: "njk" };
};
