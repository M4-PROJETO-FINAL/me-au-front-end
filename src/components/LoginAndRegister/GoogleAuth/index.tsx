import { GoogleLogin } from "@react-oauth/google";
import jwt_decode, { JwtPayload } from "jwt-decode";

import { useUserContext } from "../../../contexts/UserContext";
import { IUserRegister } from "../FormRegister";

interface IUserInfoGmail {
  email: string;
  sub: string;
  name: string;
  picture: string;
}

export const GoogleAuthLogin = () => {
  const { loginUser, createUser } = useUserContext();

  const responseGmail = async (userInfo: IUserInfoGmail) => {
    const userInfoFixed: IUserRegister = {
      email: userInfo.email,
      password: userInfo.sub,
      profile_img: userInfo.picture,
      name: userInfo.name,
    };

    await createUser(userInfoFixed, null);
    loginUser(userInfoFixed, "gmail");
  };

  return (
    <GoogleLogin
      type="icon"
      onSuccess={(userInfoJWT) => {
        if (userInfoJWT?.credential) {
          const userInfo = jwt_decode<JwtPayload>(userInfoJWT?.credential);
          responseGmail(userInfo as IUserInfoGmail);
        }
      }}
    ></GoogleLogin>
  );
};
