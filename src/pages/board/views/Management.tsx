import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../configs/servers/store";
import { fetchWorkspaces } from "../../../configs/servers/workspaceSlice";
import { fetchProjects } from "../../../configs/servers/projectSlice";
import AddProjectButton from "../../../components/commons/UI/buttons/AddProjectButton";
import ProjectsButtonsColorfull from "../../../components/commons/UI/buttons/ProjectsButtonsColorfull";
import { IManagementView } from "../../../configs/interfaces";
import { getHexColor } from "../../../helpers/getHexColor";
import useThemeColor from "../../../hooks/useThemeColor";

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
                <AddProjectButton color={getHexColor(workspace.color)} />
              </div>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Management;

// import { useEffect } from "react";
// import { IManagementView } from "../../../configs/interfaces";
// import {
//   fetchWorkspaces,
//   setCurrentWorkspaceId,
// } from "../../../configs/servers/workspaceSlice";
// import { AppDispatch, RootState, useAppDispatch } from "../../../configs/servers/store";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProjects } from "../../../configs/servers/projectSlice";
// import AddProjectButton from "../../../components/commons/UI/buttons/AddProjectButton";
// import ProjectsButtonsColorfull from "../../../components/commons/UI/buttons/ProjectsButtonsColorfull";

// const Management: React.FC<IManagementView> = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const {
//     workspaces,
//     status: workspacesStatus,
//     error: workspacesError,
//   } = useSelector((state: RootState) => state.workspaces);
//   const {
//     projectsByWorkspace,
//     status: projectsStatus,
//     error: projectsError,
//   } = useSelector((state: RootState) => state.projects);

//   useEffect(() => {
//     if (workspacesStatus === "idle") {
//       dispatch(fetchWorkspaces());
//     }
//   }, [workspacesStatus, dispatch]);

//   useEffect(() => {
//     if (workspaces.length > 0) {
//       workspaces.forEach((workspace) => {
//         if (!projectsByWorkspace[workspace.id]) {
//           dispatch(fetchProjects(workspace.id));
//         }
//       });
//     }
//   }, [workspaces, dispatch, projectsByWorkspace]);

//   const handleWorkspaceSelect = (workspaceId: string) => {
//     dispatch(setCurrentWorkspaceId(workspaceId));
//   };

//   return (
//     <div className="w-[1100px] h-[1024px] ">
//       <div className="w-[1100px] h-[1024px] ">
//         {workspaces.map((workspace) => (
//           <div key={workspace.id} className="border-b mb-4">
//             <h2> {workspace.title}</h2>
//             {workspace.projects.length > 0 ? (
//               <ul className="flex whitespace-nowrap">
//                 {workspace.projects.map(((project: ProjectType, idx: number) => (
//                   <ProjectsButtonsColorfull
//                     key={idx}
//                     message={project}
//                     className={`from-${workspace.color}-primary to-${workspace.color}-primary/50 m-8`}
//                   />
//         ))}
//         </ul>
//             ) : (
//               <ul className="flex whitespace-nowrap">
//                 <div className="w-[200px] h-[76px] m-8">
//                   <AddProjectButton color={workspace.color} />
//                 </div>
//               </ul>
//             )}
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Management;
