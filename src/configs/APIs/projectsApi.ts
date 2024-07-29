import apiClient from "../axiosConfig";

// GET /workspaces/{workspace_id}/projects/
export const getProjects = (workspaceId: string, accessToken: string) => {
  return apiClient.get(`/workspaces/${workspaceId}/projects/`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

// POST /workspaces/{workspace_id}/projects/
export const createProject = (workspaceId: string, data: any) => {
  return apiClient.post(`/workspaces/${workspaceId}/projects/`, data);
};

// GET /workspaces/{workspace_id}/projects/{id}/
export const getProjectById = (workspaceId: string, projectId: string) => {
  return apiClient.get(`/workspaces/${workspaceId}/projects/${projectId}/`);
};

// PATCH /workspaces/{workspace_id}/projects/{id}/
export const updateProject = (
  workspaceId: string,
  projectId: string,
  data: any
) => {
  return apiClient.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/`,
    data
  );
};

// DELETE /workspaces/{workspace_id}/projects/{id}/
export const deleteProject = (workspaceId: string, projectId: string) => {
  return apiClient.delete(`/workspaces/${workspaceId}/projects/${projectId}/`);
};
