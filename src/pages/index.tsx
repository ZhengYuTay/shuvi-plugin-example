import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [num, setNum] = React.useState(0);
  const sharks = useSelector((state) => state.sharks);
  const dispatch = useDispatch();
  console.log({ sharks });
  return (
    <div>
      test string
      <br />
      num: {num}
      sharks: {sharks}
      <br />
      <button
        onClick={() => {
          setNum(1 + num);
          dispatch.sharks.increment(2);
        }}
      >
        {" "}
        increment
      </button>
    </div>
  );
};

App.getInitialProps = async ({ appContext }: any) => {
  const { store } = appContext;
  store.dispatch.sharks.increment(2);
  return {};
};
export default App;
