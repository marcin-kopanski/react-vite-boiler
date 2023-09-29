import { Link } from "react-router-dom";
import { DemoRoutes } from "src/components/demoRoutes/DemoRoutes";

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
        <DemoRoutes />
      </div>
    </>
  );
};
