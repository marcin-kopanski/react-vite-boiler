import React, { Suspense } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { queryClient } from "src/App";
import { DemoLayout } from "src/layouts/DemoLayout";
import { MainLayout } from "src/layouts/MainLayout";
import { RootLayout } from "src/layouts/RootLayout";
import { About } from "src/pages/about/About";
import { Demo } from "src/pages/demo/Demo";
import { DemoUserDetails } from "src/pages/demoUserDetails/DemoUserDetails";
import { DemoUsers } from "src/pages/demoUsers/DemoUsers";
import { Home } from "src/pages/home/Home";
import { NoMatch } from "src/pages/noMatch/NoMatch";
import { Root } from "src/pages/root/Root";
import {
  demoUserDetailsLoader,
  demoUsersLoader,
} from "src/services/DemoUserLoader";

const MicroDemoRoutes = React.lazy(() => import("microDemo/Routes"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "main-app",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "demo",
            element: <DemoLayout />,
            children: [
              {
                index: true,
                element: <Demo />,
              },
              {
                path: "demo-users",
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    element: <DemoUsers />,
                    loader: demoUsersLoader(queryClient),
                  },
                  {
                    path: ":userId",
                    element: <DemoUserDetails />,
                    loader: demoUserDetailsLoader(queryClient),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "micro-demo/*",
        element: <MicroDemoRoutes />,
      },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

export const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
