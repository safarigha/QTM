import apiClient from "../axiosConfig";

// GET /settings/
export const getSettings = () => {
  return apiClient.get("/settings/");
};

// POST /settings/
export const updateSettings = (data: any) => {
  return apiClient.post("/settings/", data);
};
