import apiClient from "../axiosConfig";

// درخواست برای دریافت اطلاعات تمام حسابهای کاربری بر اساس شناسه
export const getAllAccountDetails = () => {
  return apiClient.get(`/accounts/`);
};

// درخواست برای دریافت اطلاعات حساب کاربری بر اساس شناسه
export const getAccountDetails = (id: string) => {
  return apiClient.get(`/accounts/${id}`);
};

// درخواست برای ثبت حساب کاربری جدید
export const registerAccount = (data: any) => {
  return apiClient.post("/accounts/", data);
};

// درخواست برای به روزرسانی حساب کاربری بر اساس شناسه
export const updateAccount = (id: string, data: any) => {
  return apiClient.patch(`/accounts/${id}`, data);
};

// درخواست برای حذف حساب کاربری بر اساس شناسه
export const deleteAccount = (id: string) => {
  return apiClient.delete(`/accounts/${id}`);
};

// درخواست برای تغییر رمز عبور حساب کاربری
export const changePassword = (data: any) => {
  return apiClient.put("/accounts/change-password/", data);
};

// درخواست برای ورود به سیستم
export const loginAccount = (data: any) => {
  return apiClient.post("/accounts/login/", data);
};

// درخواست برای بازیابی رمز عبور
export const resetPassword = (data: any) => {
  return apiClient.post("/accounts/reset-password/", data);
};

// درخواست برای تنظیم مجدد رمز عبور
export const setPassword = (token: string, data: any) => {
  return apiClient.patch(
    `/accounts/reset-password/set-password/?token=${token}`,
    data
  );
};

// درخواست برای تازه‌سازی توکن
export const refreshAccessTokenAPI = () => {
  return apiClient.post("/accounts/refresh/");
};
