import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, Suspense, lazy, useEffect, useState } from "react";
import { SharedContextProvider } from "react-vite-shared-library";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = lazy(() =>
  // @ts-ignore
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SharedContextProvider>{children}</SharedContextProvider>

      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};
