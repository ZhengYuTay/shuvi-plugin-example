// @ts-ignore
import { router, getRuntimeConfig } from "@shuvi/app";

export default () => {
  console.log({ router, getRuntimeConfig: getRuntimeConfig() });
  return <div>router</div>;
};
