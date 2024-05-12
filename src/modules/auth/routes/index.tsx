import { lazy } from "react";
const RegisterPage = lazy(() => import(`@modules/auth/pages/register`));
const LoginPage = lazy(() => import(`@modules/auth/pages/login`));
const authRoutes = [
  {
    path: "/auth/sign-in",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/auth/sign-up",
    exact: true,
    component: RegisterPage,
  },
];
export default authRoutes;
