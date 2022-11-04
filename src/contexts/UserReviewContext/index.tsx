import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { IProviderProps } from "../../interfaces/User";

interface IUserReviewProvider {
  createReview: (data) => void;
  isOpenReviewModal: boolean;
  setIsOpenReviewModal: Dispatch<SetStateAction<boolean>>;
}

const UserReviewContext = createContext({} as IUserReviewProvider);

export const UserReviewContextProvider = ({ children }: IProviderProps) => {
  const createReview = (data) => {
    //do the request
    // make a toast if success;

    return;
  };
  const [isOpenReviewModal, setIsOpenReviewModal] = useState(true);

  return (
    <UserReviewContext.Provider
      value={{ createReview, setIsOpenReviewModal, isOpenReviewModal }}
    >
      {children}
    </UserReviewContext.Provider>
  );
};

export const UseUserReviewContext = () => useContext(UserReviewContext);
