import { FC, PropsWithChildren, createContext } from "react";

interface ContextState {
  user: { name: string; email: string; isAdmin: boolean };
}

export const SessionContext = createContext<ContextState | undefined>(
  undefined,
);

export const SessionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const user = {
    name: "Marcin",
    email: "marcin.kopanski@silkycoders.com",
    isAdmin: true,
  };
  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  );
};
