import React from "react";
import { Link } from "react-router-dom";
import BrandColorButton from "./components/commons/UI/buttons/BrandColorButton";
import { backgroundAuth } from "./assets/images/images";

interface IAuthProps {
  isSignIn: boolean;
  children: React.ReactNode;
}

const Layout = ({ isSignIn, children }: IAuthProps) => {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col items-center justify-center">
      <header className="flex items-center justify-between px-20 mt-20 fixed top-0 w-full z-10">
        <h1 className=" font-black text-3xl bg-gradient-to-r from-[#4AB7D8] to-[#118C80] text-transparent bg-clip-text">
          کیوتی‌منیجر
        </h1>
        <div className="flex items-center justify-center gap-x-2">
          <p className="font-medium">
            {isSignIn ? "ثبت نام نکردی؟" : "حساب کاربری داری؟"}
          </p>
          <Link to={isSignIn ? "/register" : "/login"}>
            <BrandColorButton
              text={isSignIn ? "ثبت نام" : "ورود"}
              classNames="w-24"
            />
          </Link>
        </div>
      </header>
      <div className="z-20">{children}</div>
      <img
        className="absolute -bottom-32 z-0 w-full"
        src={backgroundAuth}
        alt="loginbg"
      />
    </div>
  );
};

export default Layout;
