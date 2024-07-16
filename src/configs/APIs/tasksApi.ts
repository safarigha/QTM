import apiClient from "../axiosConfig";

// GET /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks
export const getTasks = (
  workspaceId: string,
  projectId: string,
  boardId: string
) => {
  return apiClient.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks`
  );
};

// POST /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks
export const createTask = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  data: any
) => {
  return apiClient.post(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks`,
    data
  );
};

// GET /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{id}
export const getTaskById = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string
) => {
  return apiClient.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}`
  );
};

// PUT /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{id}
export const updateTask = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string,
  data: any
) => {
  return apiClient.put(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}`,
    data
  );
};

// PATCH /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{id}
export const patchTask = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string,
  data: any
) => {
  return apiClient.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}`,
    data
  );
};

// DELETE /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{id}
export const deleteTask = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string
) => {
  return apiClient.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}`
  );
};
