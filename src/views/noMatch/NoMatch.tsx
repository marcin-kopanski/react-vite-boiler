import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <>
      <div>Nothing to see here!</div>
      <div>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
};
