import { Runtime } from "@shuvi/types";
import { createStore } from "./store/createStore";

const initPlugins: Runtime.IInitAppPlugins = ({
  applyPluginOption,
  registerPlugin,
}) => {
  registerPlugin("create-app-context", {
    name: "log",
    fn: () => {
      console.log("tap context");
    },
  });

  applyPluginOption("redux", { createStore });
};

export default initPlugins;
