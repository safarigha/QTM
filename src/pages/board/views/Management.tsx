import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../configs/servers/store";
import {
  fetchWorkspaces,
  setCurrentWorkspaceId,
} from "../../../configs/servers/workspaceSlice";
import { fetchProjects } from "../../../configs/servers/projectSlice";
import AddProjectButton from "../../../components/commons/UI/buttons/AddProjectButton";
import ProjectsButtonsColorfull from "../../../components/commons/UI/buttons/ProjectsButtonsColorfull";
import { IManagementView } from "../../../configs/interfaces";
import { getHexColor } from "../../../helpers/getHexColor";
import ModalView from "../../../components/commons/UI/ModalView";
import New from "../../../components/project/New";

const Management: React.FC<IManagementView> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { workspaces } = useSelector((state: RootState) => state.workspaces);
  const { projectsByWorkspace } = useSelector(
    (state: RootState) => state.projects
  );
  const setColor = (labelColor: string, percent?: number) => {
    const parts = labelColor.split("-");
    return `${parts[1]}-${!percent ? parts[2] : percent}`;
  };
  const [isOpenNewProject, setIsOpenNewProject] = useState(false);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState<string | null>(
    null
  );

  const openNewProject = () => setIsOpenNewProject(true);
  const closeNewProject = () => setIsOpenNewProject(false);

  useEffect(() => {
    dispatch(fetchWorkspaces());
  }, [dispatch]);

  useEffect(() => {
    workspaces.forEach((workspace) => {
      if (!projectsByWorkspace[workspace.id]) {
        dispatch(fetchProjects(workspace.id));
      }
    });
  }, [workspaces, dispatch, projectsByWorkspace]);

  const handleWorkspaceSelect = (workspaceId: string) => {
    dispatch(setCurrentWorkspaceId(workspaceId));
  };

  const handleNewProject = (id: string) => {
    setSelectedWorkspaceId(id);
    handleWorkspaceSelect(id);
    openNewProject();
  };

  return (
    <div className="w-[1050px] h-screen overflow-y-auto">
      {workspaces.map((workspace) => (
        <div key={workspace.id} className="border-b mb-2 overflow-x-auto">
          <h2 className="text-xl font-extrabold"> {workspace.name}</h2>
          {projectsByWorkspace[workspace.id] &&
          projectsByWorkspace[workspace.id].length > 0 ? (
            <ul className="flex whitespace-nowrap">
              {projectsByWorkspace[workspace.id].map((project) => (
                <ProjectsButtonsColorfull
                  key={project.id}
                  message={project.name}
                  className={`from-${setColor(workspace.color)} to-${setColor(
                    workspace.color,
                    300
                  )} m-8`}
                />
              ))}
            </ul>
          ) : (
            <ul className="flex whitespace-nowrap">
              <div className="m-8">
                <AddProjectButton
                  color={getHexColor(workspace.color)}
                  onClick={() => handleNewProject(workspace.id)}
                />
              </div>
            </ul>
          )}
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

export default Management;
