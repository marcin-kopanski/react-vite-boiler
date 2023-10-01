import { Query, QueryFunctionContext } from "@tanstack/react-query";

export const UserKeys = {
  all: ["users"] as const,
  list: () => [...UserKeys.all, "list"] as const,
  listWithPaging: (page: number, limit: number) => [...UserKeys.list(), page, limit] as const,
  details: () => [...UserKeys.all, "details"] as const,
  detailsById: (id: string) => [...UserKeys.details(), id] as const,
};

const fetchUsers = async ({
  queryKey,
}: QueryFunctionContext<ReturnType<typeof UserKeys.listWithPaging>>): Promise<{ total: number; data: User[] }> => {
  let total = 0;
  const data = await fetch(`/api/users?page=${queryKey[2]}&pageSize=${queryKey[3]}`).then((response) => {
    total = +(response.headers.get("X-Total-Count") || "0");
    return response.json();
  });

  return { total, data };
};

const fetchUserDetails = async ({
  queryKey,
}: QueryFunctionContext<ReturnType<typeof UserKeys.detailsById>>): Promise<User> => {
  const data = await fetch(`/api/users/${queryKey[2]}`).then((response) => response.json());
  return data;
};

export const UserQueries = {
  getUsers: (page: number, limit: number) => ({
    queryKey: UserKeys.listWithPaging(page, limit),
    queryFn: fetchUsers,
  }),
  getUser: (userId: string) => ({
    queryKey: UserKeys.detailsById(userId),
    queryFn: fetchUserDetails,
  }),
};
