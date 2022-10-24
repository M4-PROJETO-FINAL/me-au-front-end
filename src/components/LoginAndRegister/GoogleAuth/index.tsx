import { GoogleLogin } from "@react-oauth/google";
import jwt_decode, { JwtPayload } from "jwt-decode";

interface IUserInfoGmail {
  email: string;
  sub: string;
  name: string;
  picture: string;
}

export const GoogleAuthLogin = () => {
  //   const { loginUser, registerUser, setUser } = useAuthUserContext();

  const responseGmail = (userInfo: IUserInfoGmail) => {
    // A tipagem <any> será substituida pela tipagem do User

    const userInfoFixed: any = {
      email: userInfo.email,
      password: userInfo.sub,
      avatar: userInfo.picture,
      name: userInfo.name,
      isAdmin: false,
    };
    console.log(userInfo);
    console.log(userInfoFixed);
    // setUser(userInfoFixed);
    // registerUser(userInfoFixed);
    // loginUser(userInfoFixed);
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
