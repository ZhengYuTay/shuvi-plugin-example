import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// @ts-ignore
import { Link, useRouter } from "@shuvi/app";
import _ from "lodash";

const Home = () => {
  const [num, setNum] = React.useState(0);
  const sharks = useSelector((state) => state.sharks);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div>
      test string1234
      {_.join(["a", "b", "c"], "~15")}
      <br />
      num112: {num}
      sharks: {sharks}
      <br />
      <button
        onClick={() => {
          setNum(1 + num);
          dispatch.sharks.increment(2);
        }}
      >
        {" "}
        1213
      </button>
      <Link to="/ree">notfou12nd</Link>
      <Link to="/error">error</Link>
    </div>
  );
};

Home.getInitialProps = async ({ appContext }: any) => {
  console.log("Home getInitialProps called");
  const { store } = appContext;
  store.dispatch.sharks.increment(112);
  return {};
};

export default Home;
