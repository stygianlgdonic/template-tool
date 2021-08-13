import React from "react";
import { Navigate } from "react-router-dom";
import { validation } from "../validation";

const PublicRoute: React.FC<{ element: any; path: any; }> = ({ element: RouteComponent, path }) => {

    const condition = validation();
    console.log("==============>", typeof (condition))

    return !condition ? <RouteComponent /> : <Navigate to={"/"} />
};
export default PublicRoute;