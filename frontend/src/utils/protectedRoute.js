import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  redirectPath = "/notavailable",
  isAdmin = false,
}) => {
  if (isAdmin && sessionStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace />;
  } else if (!isAdmin && sessionStorage.getItem("admin")) {
    return <Navigate to={redirectPath} replace />;
  } else if (
    !sessionStorage.getItem("user") &&
    !sessionStorage.getItem("admin")
  ) {
    return <Navigate to={"/login"} replace />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
