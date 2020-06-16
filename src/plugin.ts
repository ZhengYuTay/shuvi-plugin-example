import { Runtime } from "@shuvi/types";

const initPlugins: Runtime.InitPlugins = ({
  applyPluginOption,
  registerPlugin,
}) => {
  registerPlugin("create-app-context", {
    name: "log",
    fn: () => {
      console.log("tap context");
    },
  });

  applyPluginOption("speedmeasure", {
    log: "this123",
  });
};

export default initPlugins;
