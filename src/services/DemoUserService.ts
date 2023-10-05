import { Query, QueryFunctionContext } from "@tanstack/react-query";

export const DemoUserKeys = {
  all: ["demo-users"] as const,
  list: () => [...DemoUserKeys.all, "list"] as const,
  listWithPaging: (page: number, limit: number) =>
    [...DemoUserKeys.list(), page, limit] as const,
  details: () => [...DemoUserKeys.all, "details"] as const,
  detailsById: (id: string) => [...DemoUserKeys.details(), id] as const,
};

const fetchDemoUsers = async ({
  queryKey,
}: QueryFunctionContext<
  ReturnType<typeof DemoUserKeys.listWithPaging>
>): Promise<{ total: number; data: DemoUser[] }> => {
  let total = 0;
  const data = await fetch(
    `/api/users?page=${queryKey[2]}&pageSize=${queryKey[3]}`,
  ).then((response) => {
    total = +(response.headers.get("X-Total-Count") || "0");
    return response.json();
  });

  return { total, data };
};

const fetchDemoUserDetails = async ({
  queryKey,
}: QueryFunctionContext<
  ReturnType<typeof DemoUserKeys.detailsById>
>): Promise<DemoUser> => {
  const data = await fetch(`/api/users/${queryKey[2]}`).then((response) =>
    response.json(),
  );
  return data;
};

export const DemoUserQueries = {
  getUsers: (page: number, limit: number) => ({
    queryKey: DemoUserKeys.listWithPaging(page, limit),
    queryFn: fetchDemoUsers,
  }),
  getUser: (userId: string) => ({
    queryKey: DemoUserKeys.detailsById(userId),
    queryFn: fetchDemoUserDetails,
  }),
};
