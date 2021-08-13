import React from "react";
import { Navigate } from "react-router-dom";
import { validation } from "../validation";

const PrivateRoute: React.FC<{ element: any; path: any; }> = ({ element: RouteComponent, path }) => {

    const condition = validation();
    console.log(condition)

    return condition ? <RouteComponent /> : <Navigate to={"/signin"} />
};
export default PrivateRoute;