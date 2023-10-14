import { Link, Outlet } from "react-router-dom";
import { useSessionContext } from "src/hooks/useSessionContext";

export const MainLayout = () => {
  const { user } = useSessionContext();
  return (
    <>
      <div>Main Layout - Hello {user.name}</div>
      <div>
        <ul>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
          <li>
            <Link to={"demo"}>Demo</Link>
          </li>
          <li>
            <Link to={"/micro-demo"}>Micro Demo</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
