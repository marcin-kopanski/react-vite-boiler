import { Link, Outlet } from "react-router-dom";

export const DemoLayout = () => {
  return (
    <>
      <div>Demo Layout</div>
      <div>
        <ul>
          <li>
            <Link to={"demo-users"}>Users</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
