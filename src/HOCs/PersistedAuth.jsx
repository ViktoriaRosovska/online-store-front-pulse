import { useHandleCurrentUser } from "../redux/auth";

export const PersistedAuth = ({ children }) => {
  useHandleCurrentUser();

  return children;
};
