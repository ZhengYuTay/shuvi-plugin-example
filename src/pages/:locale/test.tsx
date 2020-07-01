import { router, useParams, withRouter } from "@shuvi/app";

export default withRouter((props) => {
  console.log({ a: useParams(), router, pn: props });
  return <div>router</div>;
});
