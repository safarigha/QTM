export const storeAccessToken = (accessToken: string) => {
  const issuedAt = Math.floor(Date.now() / 1000); // زمان کنونی برحسب ثانیه
  localStorage.setItem(
    "authToken",
    JSON.stringify({
      accessToken,
      // issuedAt,
    })
  );
};

export const getAccessToken = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    return JSON.parse(token).accessToken;
  }
  return null;
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem("refreshToken", refreshToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const getTokenExpiryTime = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    const { issuedAt } = JSON.parse(token);
    return issuedAt + 6 * 60 * 60; // انقضای ۶ ساعت
  }
  return null;
};

export const removeTokens = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
};
