import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../configs/servers/store";
import { fetchWorkspaces } from "../../configs/servers/workspaceSlice";
import {
  fetchProjects,
  setCurrentProject,
} from "../../configs/servers/projectSlice";
import {
  INewProjectFormData,
  ISidbarWorkspaceList,
} from "../../configs/interfaces";
import CreateNewButton from "../commons/UI/buttons/CreateNewButton";
import ModalView from "../commons/UI/ModalView";
import New from "../project/New";
import { setCurrentWorkspaceId } from "../../configs/servers/workspaceSlice";
import { getHexColor } from "../../helpers/getHexColor";

const SidbarWorkspaceList: React.FC<ISidbarWorkspaceList> = () => {
  const [isOpenNewProject, setIsOpenNewProject] = useState(false);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState<string | null>(
    null
  );

  const openNewProject = () => setIsOpenNewProject(true);
  const closeNewProject = () => setIsOpenNewProject(false);

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

  const handleWorkspaceSelect = (workspaceId: string) => {
    dispatch(setCurrentWorkspaceId(workspaceId));
  };

  const handleNewProject = (id: string) => {
    setSelectedWorkspaceId(id);
    handleWorkspaceSelect(id);
    openNewProject();
  };

  const handleProjectClick = (
    project: INewProjectFormData,
    workspaceId: string
  ) => {
    dispatch(setCurrentProject(project));
    handleWorkspaceSelect(workspaceId);
  };

  if (workspacesStatus === "loading" || projectsStatus === "loading") {
    return (
      <span className="flex justify-center text-xs">در حال بارگزاری ...</span>
    );
  }

  if (workspacesError || projectsError) {
    return <p>Error: {workspacesError || projectsError}</p>;
  }

  return (
    <div className="flex flex-col">
      {workspaces.map((workspace) => (
        <div key={workspace.id} className="collapse">
          <input
            type="checkbox"
            id={`collapse-toggle-${workspace.id}`}
            className="peer"
          />
          <div
            className="collapse-title text-md font-medium"
            onClick={() => handleWorkspaceSelect(workspace.id)}
          >
            <label
              htmlFor={`collapse-toggle-${workspace.id}`}
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
                  onClick={() => handleProjectClick(project, workspace.id)}
                  className={`text-right ${workspace.color.replace(
                    "bg",
                    "text"
                  )} w-[250px] py-1 px-2 mr-6 rounded-[10px] hover:bg-gray-200`}
                >
                  {project.name}
                </button>
              ))
            ) : (
              <div className="top-0 bottom-0">
                <p
                  className={`text-center text-xs ${workspace.color.replace(
                    "bg-",
                    "text-"
                  )}`}
                >
                  پروژه‌ای هنوز ثبت نشده است
                </p>
              </div>
            )}
            <div className="flex justify-center">
              <CreateNewButton
                color={getHexColor(workspace.color)}
                label="ساختن پروژه جدید"
                className={`h-[30px] rounded-[4px] mt-2 text-xs border ${workspace.color.replace(
                  "bg",
                  "border"
                )} ${workspace.color.replace("bg", "text")}`}
                labelClassName="text-xs"
                onClick={() => handleNewProject(workspace.id)}
              />
            </div>
          </div>
        </div>
      ))}
      {selectedWorkspaceId && (
        <ModalView isOpen={isOpenNewProject} onClose={closeNewProject}>
          <New onClose={closeNewProject} workspaceId={selectedWorkspaceId} />
        </ModalView>
      )}
    </div>
  );
};

export default SidbarWorkspaceList;
