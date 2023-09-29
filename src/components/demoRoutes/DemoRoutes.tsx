import { Route, Routes } from "react-router-dom";
import { Demo } from "src/views/demo/Demo";
import { NoMatch } from "src/views/noMatch/NoMatch";

export const DemoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Demo />}></Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
