module.exports = function(eleventyConfig) {
  // We pass js through this way because of https://github.com/11ty/eleventy/issues/1088
  eleventyConfig.addPassthroughCopy("src/js")
  // And we pass slick through this way because it has a lot of random file extensions
  // which I didn't want to list explicitly :)
  eleventyConfig.addPassthroughCopy("src/slick")
  eleventyConfig.addPassthroughCopy("src/_redirects"),
  eleventyConfig.setTemplateFormats([
    "html",
    "css",
    "png",
    "svg",
    "jpeg",
    "jpg",
    "ico",
    "webmanifest",
  ])
  return {
    dir: {
      input: "src",
      output: "build",
    },
  }
}
