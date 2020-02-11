import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import Route from "react-router-dom/es/Route";
import { authenticationService } from '../services/authentication.service';



export const PrivateRoute = ({ component: Component, ...rest }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest} render={props => {
        const user = authenticationService.currentUser;
        if (!user) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />;
    }} />
);