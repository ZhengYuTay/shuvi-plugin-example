import React from "react";
import { useSelector, useDispatch } from "react-redux";
// @ts-ignore
import { Link } from "@shuvi/app";

const App = () => {
  const [num, setNum] = React.useState(0);
  const sharks = useSelector((state) => state.sharks);
  const dispatch = useDispatch();
  console.log({ sharks });
  return (
    <div>
      test string1234
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
      <Link to="/qwe">notfound</Link>
    </div>
  );
};

App.getInitialProps = async ({ appContext }: any) => {
  const { store } = appContext;
  store.dispatch.sharks.increment(112);
  return {};
};
export default App;
