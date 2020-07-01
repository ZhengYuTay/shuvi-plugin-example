const { BUNDLER_TARGET_SERVER } = require("shuvi");

module.exports = {
  useTypescript: true,
  runtimeConfig: {
    ree: "qwe",
  },
  env: {
    ree: process.env.ree,
  },
  plugins: ["@shuvi/plugin-redux"],
  publicPath: "./",
};
