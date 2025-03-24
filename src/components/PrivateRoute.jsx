// PrivateRoute.jsx
import { useContext } from "react";
import { Context } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { authenticated } = useContext(Context);

  return authenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
