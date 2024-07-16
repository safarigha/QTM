import apiClient, { InternalAxiosRequestConfig } from "../axiosConfig";

// GET /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/
export const getTaskAssignees = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string,
  config?: InternalAxiosRequestConfig
) => {
  return apiClient.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/`,
    config
  );
};

// POST /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/
export const assignTask = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string,
  data: any,
  config?: InternalAxiosRequestConfig
) => {
  return apiClient.post(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/`,
    data,
    config
  );
};

// GET /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/{id}/
export const getTaskAssigneeById = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string,
  assigneeId: string,
  config?: InternalAxiosRequestConfig
) => {
  return apiClient.get(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/${assigneeId}/`,
    config
  );
};

// PUT /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/{id}/
export const updateTaskAssignee = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string,
  assigneeId: string,
  data: any,
  config?: InternalAxiosRequestConfig
) => {
  return apiClient.put(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/${assigneeId}/`,
    data,
    config
  );
};

// PATCH /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/{id}/
export const partiallyUpdateTaskAssignee = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string,
  assigneeId: string,
  data: any,
  config?: InternalAxiosRequestConfig
) => {
  return apiClient.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/${assigneeId}/`,
    data,
    config
  );
};

// DELETE /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/{id}/
export const deleteTaskAssignee = (
  workspaceId: string,
  projectId: string,
  boardId: string,
  taskId: string,
  assigneeId: string,
  config?: InternalAxiosRequestConfig
) => {
  return apiClient.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/${assigneeId}/`,
    config
  );
};
