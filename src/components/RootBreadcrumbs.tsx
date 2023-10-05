import { FC, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { getSitePagesValue } from "src/constants/SitePagesMap";
import { PathSegment } from "src/types/PathSegment";

const HOME_PATH_SEGMENT: PathSegment = {
  url: "/",
  name: getSitePagesValue("/"),
};

export const RootBreadcrumbs: FC = () => {
  const { pathname } = useLocation();

  const breadcrumbs = useMemo(() => {
    const pathNames = pathname.split("/");
    const pathSegments: PathSegment[] =
      pathname === "/"
        ? [HOME_PATH_SEGMENT]
        : pathNames.map((element, index) =>
            element === ""
              ? HOME_PATH_SEGMENT
              : {
                  url: pathNames.slice(0, index + 1).join("/"),
                  name: getSitePagesValue(element),
                },
          );

    return pathSegments.map(({ url, name }, index, array) =>
      index + 1 < array.length ? (
        <Link key={url} style={{ marginRight: "10px" }} to={url}>
          {name}
        </Link>
      ) : (
        <span key={url}>{name}</span>
      ),
    );
  }, [pathname]);

  return (
    <div>
      <p>Breadcrumbs</p>
      <nav style={{ marginLeft: "20px" }}>{breadcrumbs}</nav>
      <p></p>
    </div>
  );
};
