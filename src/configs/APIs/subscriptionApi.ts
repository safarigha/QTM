import apiClient from "../axiosConfig";

// ایجاد اشتراک جدید
export const createSubscription = (data: any) => {
  return apiClient.post("/workspaces/subscriptions/", data);
};

// کپی کردن اشتراک
export const copySubscription = (data: any) => {
  return apiClient.post("/workspaces/subscriptions/copy/", data);
};

// دریافت اطلاعات از دعوتنامه با توکن
export const getInvitationSubscription = (token: string) => {
  return apiClient.get(`/workspaces/subscriptions/invitation/${token}`);
};
