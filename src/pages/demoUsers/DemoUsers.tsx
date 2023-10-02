import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { UserQueries } from "src/services/demo/UserService";
import { DEFAULT_LIMIT, DEFAULT_PAGE } from "src/utils/TableDefaults";
import { DemoUsersTable } from "src/pages/demoUsers/components/DemoUsersTable";

export const DemoUsers = () => {
  const [searchParams] = useSearchParams({ page: DEFAULT_PAGE, limit: DEFAULT_LIMIT });
  const page = searchParams.get("page") || DEFAULT_PAGE;
  const limit = searchParams.get("limit") || DEFAULT_LIMIT;

  const { data: fetchData, isLoading } = useQuery(UserQueries.getUsers(+page, +limit));
  const { data, total } = fetchData || { data: [], total: 0 };

  return (
    <>
      <div>Demo Users</div>
      <div>
        <DemoUsersTable isLoading={isLoading} currentPage={+page} limit={+limit} total={total} data={data} />
      </div>
    </>
  );
};
