import { registerAccount, loginAccount } from "../../APIs/accountApi";
import { IRegisterFormData, ILoginFormData } from "../../interfaces";

// ثبت حساب کاربری
const register = async (userData: IRegisterFormData) => {
  const response = await registerAccount(userData);
  return response.data;
};

// ورود به سیستم
const login = async (userData: ILoginFormData) => {
  const response = await loginAccount(userData);
  if (response) {
    const expiresIn = response.data.expires_in; // زمان انقضا در ثانیه
    localStorage.setItem(
      "authToken",
      JSON.stringify({
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
        expiresIn,
        expiryDate: new Date().getTime() + expiresIn * 1000, // زمان انقضای توکن به میلی‌ثانیه
      })
    );
  }
  return response.data;
};

export { register, login };
