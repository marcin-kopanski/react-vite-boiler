import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useSharedContext } from "react-vite-shared-library";
import { RootBreadcrumbs } from "src/components/RootBreadcrumbs";

export const RootLayout: FC = () => {
  const { user } = useSharedContext();

  return (
    <>
      <header>Root Layout - {user.name}</header>
      <header>
        <RootBreadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
