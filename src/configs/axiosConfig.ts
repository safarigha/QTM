import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosRequestHeaders,
} from "axios";

// تعریف اینترفیس برای هدرها
interface RawAxiosHeaders {
  [key: string]: string;
}

// تعریف اینترفیس برای هدرهای خاص Axios
interface AxiosHeaders {
  Accept?: string;
  "Content-Length"?: string;
  "User-Agent"?: string;
  "Content-Encoding"?: string;
  Authorization?: string;
}

// تعریف تنظیمات داخلی برای Axios
export interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  headers?: RawAxiosHeaders & Partial<AxiosHeaders>;
}

// ایجاد یک نمونه Axios برای ارتباط با API
export const apiClient = axios.create({
  baseURL: "http://185.8.174.74:8000",

  headers: {
    "Content-Type": "application/json",
  },
});

// تنظیم تایم‌اوت پیش‌فرض برای درخواست‌ها
apiClient.defaults.timeout = 20000;

// اضافه کردن یک interceptor برای اضافه کردن توکن به درخواست‌ها
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
      }
      (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// اضافه کردن یک interceptor برای مدیریت خطاهای پاسخ
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // مدیریت خطاهای پاسخ API
    // مثلا، اگر خطای 401 بود، کاربر را به صفحه ورود هدایت کنید
    if (error.response?.status === 401) {
      // می‌توانید در اینجا کارهای لازم برای مدیریت خطای 401 را انجام دهید
      // مانند هدایت به صفحه ورود
      window.location.href = "/login"; // مسیر صفحه ورود خود را تنظیم کنید
    }
    return Promise.reject(error);
  }
);

export default apiClient;

// import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

// // تعریف اینترفیس برای هدرها
// interface RawAxiosHeaders {
//   [key: string]: string;
// }

// // تعریف اینترفیس برای هدرهای خاص Axios
// interface AxiosHeaders {
//   Accept: string;
//   "Content-Length": string;
//   "User-Agent": string;
//   "Content-Encoding": string;
//   Authorization?: string;
// }

// // تعریف تنظیمات داخلی برای Axios
// export interface InternalAxiosRequestConfig extends AxiosRequestConfig {
//   headers?: RawAxiosHeaders & Partial<AxiosHeaders>;
// }

// // ایجاد یک نمونه Axios برای ارتباط با API
// export const apiClient = axios.create({
//   baseURL: "http://185.8.174.74:8000",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // تنظیم تایم‌اوت پیش‌فرض برای درخواست‌ها
// apiClient.defaults.timeout = 10000;

// // اضافه کردن یک interceptor برای اضافه کردن توکن به درخواست‌ها
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error)
// );

// // اضافه کردن یک interceptor برای مدیریت خطاهای پاسخ
// apiClient.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   (error: AxiosError) => {
//     // مدیریت خطاهای پاسخ API
//     // مثلا، اگر خطای 401 بود، کاربر را به صفحه ورود هدایت کنید
//     if (error.response?.status === 401) {
//       // می‌توانید در اینجا کارهای لازم برای مدیریت خطای 401 را انجام دهید
//       // مانند هدایت به صفحه ورود
//     }
//     return Promise.reject(error);
//   }
// );

// export default apiClient;
