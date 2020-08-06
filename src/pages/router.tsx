// @ts-ignore
import { router, getRuntimeConfig, useLocation, useParams } from "@shuvi/app";

export default () => {
  console.log({ router, getRuntimeConfig: getRuntimeConfig() });
  const location = useLocation();
  const params = useParams();
  console.log(location, params);
  return <div>router</div>;
};
