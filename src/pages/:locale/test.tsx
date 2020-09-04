// import { router, useParams, withRouter } from "@shuvi/app";

export default (props) => {
  // console.log({ a: useParams(), router, pn: props });
  return <div>router1563s</div>;
};

export const beforeEnter = (_, __, next) => {
  console.log("ree");
  next();
};
