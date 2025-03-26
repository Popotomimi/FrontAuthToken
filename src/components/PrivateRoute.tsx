import { ReactNode } from "react";
import { useContext } from "react";
import { Context } from "../context/UserContext";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { authenticated } = useContext(Context);

  return authenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
