import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const [num, setNum] = React.useState(0);
  const sharks = useSelector((state) => state.sharks);
  console.log({ sharks });
  return (
    <div>
      1234568123
      <br />
      num: {num}
      sharks: {sharks}
      <br />
      <button onClick={setNum.bind(null, 1 + num)}> increment</button>
    </div>
  );
};

App.getInitialProps = ({ appContext }: any) => {
  const { store } = appContext;
  store.dispatch.sharks.increment(2);
};
export default App;
