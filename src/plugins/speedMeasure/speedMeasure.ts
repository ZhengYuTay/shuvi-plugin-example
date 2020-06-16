import { Runtime } from "@shuvi/types";

let idx = 0;
const speedMeasure: Runtime.Plugin = (tap, options: any) => {
  tap("create-app-context", {
    name: "start render",
    fn: () => {
      console.log({ options });
      console.time((idx++).toString());
    },
  });
  tap("render-done", {
    name: "end render",
    fn: () => {
      console.timeEnd((idx - 1).toString());
    },
  });
};

export default speedMeasure;
