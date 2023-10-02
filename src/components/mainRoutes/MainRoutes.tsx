import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { LoaderFunction, LoaderFunctionArgs, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { DemoLayout } from "src/layouts/DemoLayout";
import { MainLayout } from "src/layouts/MainLayout";
import { UserQueries } from "src/services/demo/UserService";
import { DEFAULT_LIMIT, DEFAULT_PAGE } from "src/utils/TableDefaults";
import { About } from "src/pages/about/About";
import { Demo } from "src/pages/demo/Demo";
import { DemoUserDetails } from "src/pages/demoUserDetails/DemoUserDetails";
import { DemoUsers } from "src/pages/demoUsers/DemoUsers";
import { Home } from "src/pages/home/Home";
import { NoMatch } from "src/pages/noMatch/NoMatch";

export const MainRoutes = () => {
  const queryClient = useQueryClient();

  const demoUsersLoader: LoaderFunction = async (args: LoaderFunctionArgs) => {
    const url = new URL(args.request.url);
    const page = url.searchParams.get("page") || DEFAULT_PAGE;
    const limit = url.searchParams.get("limit") || DEFAULT_LIMIT;

    const query = UserQueries.getUsers(+page, +limit);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };

  const demoUserDetailsLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
    const { userId } = params;
    if (userId) {
      const query = UserQueries.getUser(userId);
      return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
    }
  };

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
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
                      loader: demoUsersLoader,
                    },
                    {
                      path: ":userId",
                      element: <DemoUserDetails />,
                      loader: demoUserDetailsLoader,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: "*",
          element: <NoMatch />,
        },
      ]),
    [],
  );

  return <RouterProvider router={router} />;
};
