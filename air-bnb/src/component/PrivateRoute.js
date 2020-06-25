import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = window.localStorage.getItem("access_token");
    return (
        <Route
            {...rest}
            render={props => {
                if (token) {

                    return <Component {...props} />;
                } else {

                    return <Redirect to="/sign-in" />;
                }
            }}
        />
    );
};

export default PrivateRoute;
