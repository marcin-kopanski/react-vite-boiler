import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { DEFAULT_LIMIT, DEFAULT_PAGE } from "src/utils/TableDefaults";
import { DemoUserQueries } from "./DemoUserService";

export const demoUsersLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async (args: LoaderFunctionArgs) => {
    const url = new URL(args.request.url);
    const page = url.searchParams.get("page") || DEFAULT_PAGE;
    const limit = url.searchParams.get("limit") || DEFAULT_LIMIT;

    const query = DemoUserQueries.getUsers(+page, +limit);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export const demoUserDetailsLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params }: LoaderFunctionArgs) => {
    const { userId } = params;
    if (userId) {
      const query = DemoUserQueries.getUser(userId);
      return (
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query))
      );
    }
  };
