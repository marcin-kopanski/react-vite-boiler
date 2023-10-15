import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface DemoUsersTableProps {
  isLoading: boolean;
  currentPage: number;
  limit: number;
  total: number;
  data: DemoUser[];
}

export const DemoUsersTable: FC<DemoUsersTableProps> = ({
  isLoading,
  currentPage,
  limit,
  total,
  data,
}) => {
  const navigate = useNavigate();

  const paging = useMemo(() => {
    const pages = Array.from(
      { length: Math.ceil(total / +limit) },
      (_, i) => i + 1,
    );
    return pages.map((page) => (
      <button
        key={page}
        onClick={() => navigate(`?page=${page}&limit=${limit}`)}
      >
        {page}
      </button>
    ));
  }, [total]);

  return (
    <>
      {isLoading || data === undefined ? (
        <>Loading...</>
      ) : (
        <>
          {paging}

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Username</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => {
                return (
                  <tr key={element.id}>
                    <td>
                      <button onClick={() => navigate(`${element.id}`)}>
                        Details
                      </button>
                    </td>
                    <td>{element.username}</td>
                    <td>{element.name}</td>
                    <td>{element.lastName}</td>
                    <td>{element.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {paging}
        </>
      )}
    </>
  );
};
