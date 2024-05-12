import { lazy } from "react";
const HomePage = lazy(() => import(`@modules/home`));
const homeRoutes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
];
export default homeRoutes;
