import { useContext } from "react";
import { SessionContext } from "src/contexts/SessionContext";

export const useSessionContext = () => {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error("useSessionContext must be used within a SessionContext");
  }

  return context;
};
