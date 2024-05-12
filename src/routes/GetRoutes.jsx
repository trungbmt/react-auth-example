import { BrowserRouter, Route, Routes } from "react-router-dom";

import DecalreRoutes from "./index";
import { Suspense } from "react";
const GetRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {DecalreRoutes.map((route) => {
          const { path, component: Component } = route;
          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense>
                  <Component />
                </Suspense>
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default GetRoutes;
