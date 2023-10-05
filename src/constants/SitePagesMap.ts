const UNKNOWN_LOCATION = "unknown";

export const SitePages: Map<string, string> = new Map([
  ["/", "Home"],
  ["main-app", "Main App"],
  ["about", "About"],
  ["demo", "Demo"],
  ["micro-demo", "Micro Demo"],
  ["demo-users", "Demo Users"],
]);

export const getSitePagesValue = (key: string): string => {
  return SitePages.get(key) || UNKNOWN_LOCATION;
};
