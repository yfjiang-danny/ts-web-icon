const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules[1].oneOf = [
        ...[
          {
            test: /\.svg$/,
            include: [path.resolve("src/icons/src")],
            use: [{ loader: "svg-sprite-loader", options: {} }, "svgo-loader"],
          },
        ],
        ...webpackConfig.module.rules[1].oneOf,
      ];

      return webpackConfig;
    },
  },
};
