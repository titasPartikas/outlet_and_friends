import { Link, Navigate, Outlet } from "react-router-dom";
import "./ProtectedRoutes.css";

const ProtectedRoutes = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div class="container">
      <navbar class="nav">
        <Link to="admin">Admin Panel</Link>
        <Link to="catalog">Catalog</Link>
      </navbar>

      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;
