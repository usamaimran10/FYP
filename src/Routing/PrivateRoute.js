import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route {...rest} render={(props) => <Redirect to="/landingpage" />} />
      <Route {...rest} render={(props) => <Redirect to="/landingpage" />} />
    </>
  );
};

export default PrivateRoute;
