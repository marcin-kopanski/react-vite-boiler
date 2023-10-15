import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
