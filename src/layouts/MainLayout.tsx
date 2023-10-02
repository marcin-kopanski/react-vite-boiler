import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div>Main Layout</div>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
          <li>
            <Link to={"demo"}>Demo</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
