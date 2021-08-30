import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { CATALOG_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export const AppRouter = () => {
  const [user] = useAuthState(auth);
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} exact path={path} component={Component} />
      ))}
      <Redirect to={CATALOG_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} exact path={path} component={Component} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};
