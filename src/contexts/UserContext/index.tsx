import { createContext, useContext } from "react";

import { IProviderProps } from "../../interfaces/User";

// interface IUserContext {}

const UserContext = createContext({} /*as IUserContext*/);

export const UserContextProvider = ({ children }: IProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
