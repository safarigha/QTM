import apiClient from "../axiosConfig";

// GET /workspaces/{workspace_id}/projects/{project_id}/members
export const getProjectMembers = (workspaceId: string, projectId: string) => {
  return apiClient.get(
    `/workspaces/${workspaceId}/projects/${projectId}/members`
  );
};

// POST /workspaces/{workspace_id}/projects/{project_id}/members
export const addProjectMember = (
  workspaceId: string,
  projectId: string,
  data: any
) => {
  return apiClient.post(
    `/workspaces/${workspaceId}/projects/${projectId}/members`,
    data
  );
};

// GET /workspaces/{workspace_id}/projects/{project_id}/members/{id}
export const getProjectMemberById = (
  workspaceId: string,
  projectId: string,
  memberId: string
) => {
  return apiClient.get(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}`
  );
};

// PUT /workspaces/{workspace_id}/projects/{project_id}/members/{id}
export const updateProjectMember = (
  workspaceId: string,
  projectId: string,
  memberId: string,
  data: any
) => {
  return apiClient.put(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}`,
    data
  );
};

// PATCH /workspaces/{workspace_id}/projects/{project_id}/members/{id}
export const partiallyUpdateProjectMember = (
  workspaceId: string,
  projectId: string,
  memberId: string,
  data: any
) => {
  return apiClient.patch(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}`,
    data
  );
};

// DELETE /workspaces/{workspace_id}/projects/{project_id}/members/{id}
export const deleteProjectMember = (
  workspaceId: string,
  projectId: string,
  memberId: string
) => {
  return apiClient.delete(
    `/workspaces/${workspaceId}/projects/${projectId}/members/${memberId}`
  );
};
