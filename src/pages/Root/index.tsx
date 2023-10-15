import { FC } from "react";
import { Link } from "react-router-dom";

export const Root: FC = () => {
  return (
    <>
      <p>Navigation</p>
      <Link style={{ marginRight: "10px" }} to={"main-app"}>
        Main App
      </Link>
      <Link style={{ marginRight: "10px" }} to={"micro-demo"}>
        Micro Demo
      </Link>
    </>
  );
};
