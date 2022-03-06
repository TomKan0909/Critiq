import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  redirectPath = '/notavailable',
  isAdmin = false
}) => {
  let siteUser;
  if (isAdmin) {
    siteUser = sessionStorage.getItem('admin');
  }else{
    siteUser = sessionStorage.getItem('user');
  }

  if (!siteUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet/>;
};

export default ProtectedRoute;