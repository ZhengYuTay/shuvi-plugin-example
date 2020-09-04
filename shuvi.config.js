const { BUNDLER_TARGET_SERVER } = require("shuvi");

module.exports = {
  useTypescript: true,
  router: {
    history: "browser",
  },
  runtimeConfig: {
    ree: "qwe",
  },
  env: {
    ree: process.env.ree,
  },
  ssr: true,
  plugins: ["@shuvi/plugin-redux"],
  // routes: [
  //   {
  //     path: "/",
  //     component: "index",
  //     redirect: "/ree",
  //   },
  //   {
  //     path: "/ree",
  //     component: "ree/index",
  //   },
  // ],
};
