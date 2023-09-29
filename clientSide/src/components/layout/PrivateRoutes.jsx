import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function PrivateRoutes() {
  const { getCurrentUser } = useAuth();
  const location = useLocation();

  return (
    <>
      {/* memorize the history of URL.......to use on NutsNews?? */}
      {!getCurrentUser() ? (
        <Navigate to="/login" state={{ from: location }} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default PrivateRoutes;
