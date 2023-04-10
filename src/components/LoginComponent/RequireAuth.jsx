import React from "react";
// 5. CREACION DE COMPONENTE QUE EXIGE ESTAR AUTENTICADO
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  let location = useLocation();
console.log(children, "children")
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};