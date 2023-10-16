import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { SharedContext } from "react-vite-shared-library";

export const MainLayout = () => {
  const {state} = useContext(SharedContext);

  return (
    <>
      <div>Main Layout - Hello {state?.user.name}</div>
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
