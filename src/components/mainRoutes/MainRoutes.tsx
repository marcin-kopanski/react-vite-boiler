import { Route, Routes } from "react-router-dom";
import { DemoLayout } from "src/components/layouts/demoLayout/DemoLayout";
import { MainLayout } from "src/components/layouts/mainLayout/MainLayout";
import { About } from "src/views/about/About";
import { Home } from "src/views/home/Home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="demo/*" element={<DemoLayout />} />
      </Route>
    </Routes>
  );
};
