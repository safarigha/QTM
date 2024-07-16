import apiClient from "../axiosConfig";

// دریافت تمام لاگ‌های یک تسک خاص
export const fetchTaskLogs = (
  workspace_id: string,
  project_id: string,
  board_id: string,
  task_id: string
) => {
  return apiClient.get(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/logs/`
  );
};

// دریافت یک لاگ خاص از یک تسک
export const fetchTaskLog = (
  workspace_id: string,
  project_id: string,
  board_id: string,
  task_id: string,
  id: string
) => {
  return apiClient.get(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/logs/${id}/`
  );
};
