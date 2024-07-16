import apiClient from "../axiosConfig";

// GET /workspaces/{workspace_id}/members/
export const getWorkspaceMembers = (workspaceId: string) => {
  return apiClient.get(`/workspaces/${workspaceId}/members/`);
};

// POST /workspaces/{workspace_id}/members/
export const createWorkspaceMember = (workspaceId: string, data: any) => {
  return apiClient.post(`/workspaces/${workspaceId}/members/`, data);
};

// GET /workspaces/{workspace_id}/members/{id}/
export const getWorkspaceMemberById = (
  workspaceId: string,
  memberId: string
) => {
  return apiClient.get(`/workspaces/${workspaceId}/members/${memberId}/`);
};

// PUT /workspaces/{workspace_id}/members/{id}/
export const updateWorkspaceMember = (
  workspaceId: string,
  memberId: string,
  data: any
) => {
  return apiClient.put(`/workspaces/${workspaceId}/members/${memberId}/`, data);
};

// PATCH /workspaces/{workspace_id}/members/{id}/
export const partialUpdateWorkspaceMember = (
  workspaceId: string,
  memberId: string,
  data: any
) => {
  return apiClient.patch(
    `/workspaces/${workspaceId}/members/${memberId}/`,
    data
  );
};

// DELETE /workspaces/{workspace_id}/members/{id}/
export const deleteWorkspaceMember = (
  workspaceId: string,
  memberId: string
) => {
  return apiClient.delete(`/workspaces/${workspaceId}/members/${memberId}/`);
};
