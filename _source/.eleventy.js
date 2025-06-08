const terser = require("terser");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  // eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addTemplateFormats("js");

  eleventyConfig.addExtension("js", {
    outputFileExtension: "js",
    compile: function (contents, inputPath) {
      if (inputPath.startsWith(`./src/_`)) return;

      return async (data) => {
        let ret = await terser.minify(contents);
        return ret.code;
      };
    },
  });

  return {
    dir: {
      input: "src",
      output: "../",
    },
  };
};