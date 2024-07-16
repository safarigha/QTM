// import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import axios, { AxiosRequestConfig } from "axios";

// تعریف اینترفیس برای هدرها
interface RawAxiosHeaders {
  [key: string]: string;
}

// تعریف اینترفیس برای هدرهای خاص Axios
interface AxiosHeaders {
  Accept: string;
  "Content-Length": string;
  "User-Agent": string;
  "Content-Encoding": string;
  Authorization: string;
}

// تعریف تنظیمات داخلی برای Axios
export interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  headers?: RawAxiosHeaders & Partial<AxiosHeaders>;
}

// ایجاد یک نمونه Axios برای ارتباط با API
export const apiClient = axios.create({
  // baseURL: process.env.REACT_APP_CONNECTION, // تنظیم آدرس پایه برای تمام درخواست‌ها
  baseURL: "http://185.8.174.74:8000",
  headers: {
    "Content-Type": "application/json", // تنظیم هدر Content-Type برای درخواست‌های ارسالی
  },
});

// تنظیم تایم‌اوت پیش‌فرض برای درخواست‌ها
apiClient.defaults.timeout = 10000;

// اضافه کردن یک interceptor بر

export default apiClient;
