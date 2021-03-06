import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const RenderRoutes = ({routes}) => (
    <>
        <Switch>
            {routes.map((route) => (
                <RouteWithSubRoutes key={route.key} {...route} />
            ))}
            <Route component={() => <h1>Page not found!</h1>} />
        </Switch>
    </>
);

RenderRoutes.propTypes = {
    routes: PropTypes.array,
};

RenderRoutes.defaultProps = {
    routes: [],
};

export default RenderRoutes;