import apiClient from "../axiosConfig";

// GET /workspaces/
export const getWorkspaces = () => {
  return apiClient.get("/workspaces/");
};

// POST /workspaces/
export const createWorkspace = (data: any) => {
  return apiClient.post("/workspaces/", data);
};

// GET /workspaces/{id}/
export const getWorkspaceById = (id: string) => {
  return apiClient.get(`/workspaces/${id}/`);
};

// PUT /workspaces/{id}/
export const updateWorkspace = (id: string, data: any) => {
  return apiClient.put(`/workspaces/${id}/`, data);
};

// PATCH /workspaces/{id}/
export const partialUpdateWorkspace = (id: string, data: any) => {
  return apiClient.patch(`/workspaces/${id}/`, data);
};

// DELETE /workspaces/{id}/
export const deleteWorkspace = (id: string) => {
  return apiClient.delete(`/workspaces/${id}/`);
};
