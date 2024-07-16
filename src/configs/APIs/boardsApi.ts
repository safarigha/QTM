import apiClient from "../axiosConfig";

// GET /workspaces/{workspace_id}/projects/{project_id}/boards
export const getBoards = (workspaceId: string, projectId: string) => {
  return apiClient.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards`
  );
};

// POST /workspaces/{workspace_id}/projects/{project_id}/boards
export const createBoard = (
  workspaceId: string,
  projectId: string,
  data: any
) => {
  return apiClient.post(
    `/workspaces/${workspaceId}/projects/${projectId}/boards`,
    data
  );
};

// GET /workspaces/{workspace_id}/projects/{project_id}/boards/{id}
export const getBoardById = (
  workspaceId: string,
  projectId: string,
  boardId: string
) => {
  return apiClient.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}`
  );
};

// PATCH /workspaces/{workspace_id}/projects/{project_id}/boards/{id}
export const updateBoard = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  data: any
) => {
  return apiClient.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}`,
    data
  );
};

// DELETE /workspaces/{workspace_id}/projects/{project_id}/boards/{id}
export const deleteBoard = (
  workspaceId: string,
  projectId: string,
  boardId: string
) => {
  return apiClient.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}`
  );
};
