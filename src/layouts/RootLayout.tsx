import { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RootBreadcrumbs } from "src/components/RootBreadcrumbs";
import { SitePages } from "src/constants/SitePagesMap";

export const RootLayout: FC = () => {
  const location = useLocation();

  return (
    <>
      <header>Root Layout</header>
      <header>
        <RootBreadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
