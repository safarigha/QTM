import apiClient, { InternalAxiosRequestConfig } from "../axiosConfig";

// تعریف تنظیمات خاص برای ایندکس API
interface TaskCommentIndexParams {
  workspace_id: string;
  project_id: string;
  board_id: string;
  task_id: string;
}

// دریافت همه کامنت‌های یک تسک خاص
export const fetchTaskComments = (params: TaskCommentIndexParams) => {
  const { workspace_id, project_id, board_id, task_id } = params;
  return apiClient.get(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/`
  );
};

// اضافه کردن کامنت جدید به یک تسک
export const addTaskComment = (params: TaskCommentIndexParams, data: any) => {
  const { workspace_id, project_id, board_id, task_id } = params;
  return apiClient.post(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/`,
    data
  );
};

// دریافت یک کامنت خاص از یک تسک
export const fetchTaskComment = (
  params: TaskCommentIndexParams & { id: string }
) => {
  const { workspace_id, project_id, board_id, task_id, id } = params;
  return apiClient.get(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/${id}/`
  );
};

// به روزرسانی یک کامنت خاص از یک تسک
export const updateTaskComment = (
  params: TaskCommentIndexParams & { id: string },
  data: any
) => {
  const { workspace_id, project_id, board_id, task_id, id } = params;
  return apiClient.put(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/${id}/`,
    data
  );
};

// به روزرسانی جزئی یک کامنت خاص از یک تسک
export const partialUpdateTaskComment = (
  params: TaskCommentIndexParams & { id: string },
  data: any
) => {
  const { workspace_id, project_id, board_id, task_id, id } = params;
  return apiClient.patch(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/${id}/`,
    data
  );
};

// حذف یک کامنت خاص از یک تسک
export const deleteTaskComment = (
  params: TaskCommentIndexParams & { id: string }
) => {
  const { workspace_id, project_id, board_id, task_id, id } = params;
  return apiClient.delete(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/${id}/`
  );
};
