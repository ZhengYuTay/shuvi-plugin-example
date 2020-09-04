// @ts-ignore

import { useRouter, Link } from "@shuvi/app";
const ErrorPage = ({ error }: any) => {
  const router = useRouter();
  console.log({ router });
  return (
    <>
      {error ? "500" : "404"}
      <div>
        <Link to="/ree">go</Link>
      </div>
    </>
  );
};

export default ErrorPage;
