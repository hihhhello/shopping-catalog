import Add from "./pages/Add";
import Catalog from "./pages/Catalog";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import {
  ADD_ROUTE,
  CATALOG_ROUTE,
  EDIT_ROUTE,
  LOGIN_ROUTE,
} from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: CATALOG_ROUTE,
    Component: Catalog,
  },
  {
    path: ADD_ROUTE,
    Component: Add,
  },
  {
    path: EDIT_ROUTE,
    Component: Edit,
  },
];
