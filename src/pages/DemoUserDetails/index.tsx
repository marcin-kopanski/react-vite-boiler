import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { DemoUserQueries } from "src/services/DemoUserService";

export const DemoUserDetails = () => {
  const params = useParams<{ userId: string }>();
  const { data, isLoading } = useQuery(
    DemoUserQueries.getUser(params.userId || "-1"),
  );

  return (
    <>
      <div>Demo User Details</div>
      <div>{isLoading || !data ? <>Loading...</> : <div>{data.id}</div>}</div>
    </>
  );
};
