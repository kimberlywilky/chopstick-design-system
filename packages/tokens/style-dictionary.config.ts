import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  source: ["src/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

export default sd;