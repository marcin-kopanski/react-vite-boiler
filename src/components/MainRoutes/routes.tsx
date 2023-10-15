import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { queryClient } from "src/App";
import { DemoLayout } from "src/layouts/DemoLayout";
import { MainLayout } from "src/layouts/MainLayout";
import { RootLayout } from "src/layouts/RootLayout";
import { About } from "src/pages/About";
import { Demo } from "src/pages/Demo";
import { DemoUserDetails } from "src/pages/DemoUserDetails";
import { DemoUsers } from "src/pages/DemoUsers";
import { Home } from "src/pages/Home";
import { NoMatch } from "src/pages/NoMatch";
import { Root } from "src/pages/Root";
import {
  demoUserDetailsLoader,
  demoUsersLoader,
} from "src/services/DemoUserLoader";

const MicroDemoRoutes = React.lazy(() => import("microDemo/Routes"));

export const routes = createBrowserRouter([
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
