import { createContext } from "react";

import { IProviderProps } from "../../interfaces/User";

// interface IUserContext {}

export const UserContext = createContext({} /*as IUserContext*/);

const UserContextProvider = ({ children }: IProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
