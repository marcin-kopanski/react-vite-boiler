import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { UserQueries } from "src/services/demo/UserService";

export const DemoUserDetails = () => {
  const params = useParams<{ userId: string }>();
  const { data, isLoading } = useQuery(UserQueries.getUser(params.userId || "-1"));

  return (
    <>
      <div>User Details</div>
      <div>{isLoading || !data ? <>Loading...</> : <div>{data.id}</div>}</div>
    </>
  );
};
