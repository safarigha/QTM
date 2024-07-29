export const storeAccessToken = (accessToken: string) => {
  const issuedAt = Math.floor(Date.now() / 1000); // زمان کنونی برحسب ثانیه
  localStorage.setItem("accessToken", accessToken);
};

export const getAccessToken = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    // return JSON.parse(token).accessToken;
    return token;
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
  const token = localStorage.getItem("accessToken");
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const issuedAt = payload.iat;
      return issuedAt + 6 * 60 * 60;
    } catch (error) {
      console.error("Invalid token format", error);
      return null;
    }
  }
  return null;
};

export const getAccountDetailToken = (): { id: string | null } | null => {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return { id: payload.user_id };
  } catch (error) {
    return null;
  }
};

export const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
