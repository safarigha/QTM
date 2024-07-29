import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../configs/servers/store";
import { fetchWorkspaces } from "../../configs/servers/workspaceSlice";
import { fetchProjects } from "../../configs/servers/projectSlice";
import { ISidbarWorkspaceList } from "../../configs/interfaces";
import CreateNewButton from "../commons/UI/buttons/CreateNewButton";

const SidbarWorkspaceList: React.FC<ISidbarWorkspaceList> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    workspaces,
    status: workspacesStatus,
    error: workspacesError,
  } = useSelector((state: RootState) => state.workspaces);
  const {
    projectsByWorkspace,
    status: projectsStatus,
    error: projectsError,
  } = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    if (workspacesStatus === "idle") {
      dispatch(fetchWorkspaces());
    }
  }, [workspacesStatus, dispatch]);

  useEffect(() => {
    if (workspaces.length > 0) {
      workspaces.forEach((workspace) => {
        if (!projectsByWorkspace[workspace.id]) {
          dispatch(fetchProjects(workspace.id));
        }
      });
    }
  }, [workspaces, dispatch, projectsByWorkspace]);

  if (workspacesStatus === "loading" || projectsStatus === "loading") {
    return <p>در حال بارگزاری ...</p>;
  }

  if (workspacesError || projectsError) {
    return <p>Error: {workspacesError || projectsError}</p>;
  }

  return (
    <div className="bg-white flex flex-col">
      {workspaces.map((workspace) => (
        <div key={workspace.name} className="collapse">
          <input
            type="checkbox"
            id={`collapse-toggle-${workspace.name}`}
            className="peer"
          />
          <div className="collapse-title text-md font-medium">
            <label
              htmlFor={`collapse-toggle-${workspace.name}`}
              className="cursor-pointer flex items-center font-bold"
            >
              <div
                className={`size-[18px] ml-2 rounded-[4px] ${workspace.color}`}
              />
              {workspace.name}
            </label>
          </div>
          <div className="collapse-content my-[-10px]">
            {projectsByWorkspace[workspace.id] &&
            projectsByWorkspace[workspace.id].length > 0 ? (
              projectsByWorkspace[workspace.id].map((project) => (
                <button
                  key={project.id}
                  className="text-right w-full py-1 px-2 mb-1 mr-6 rounded hover:bg-gray-100"
                >
                  {project.name}
                </button>
              ))
            ) : (
              <div className="top-0 bottom-0 mr-6">
                <p className="text-center text-xs text-gray-500">
                  پروژه‌ای هنوز ثبت نشده است
                </p>
                <div className="flex justify-center">
                  <CreateNewButton
                    color="#6B7280"
                    label="ساختن پروژه جدید"
                    className="h-[30px] rounded-[4px] mt-2 text-xs border border-gray-500 bg-white text-gray-500"
                    labelClassName="text-xs"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidbarWorkspaceList;
