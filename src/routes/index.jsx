import authRoutes from "@modules/auth/routes";
import homeRoutes from "@modules/home/routes";
const routes = [...authRoutes, ...homeRoutes];
export default routes;
