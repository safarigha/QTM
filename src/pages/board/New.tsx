import { useEffect, useState } from "react";
import BoardItem from "../../components/commons/UI/boardItems";
import CreateNewButton from "../../components/commons/UI/buttons/CreateNewButton";
import { getHexColor } from "../../helpers/getHexColor";
import useThemeColor from "../../hooks/useThemeColor";
import { getBoards } from "../../configs/APIs/boardsApi";
import { useSelector } from "react-redux";
import { RootState } from "../../configs/servers/store";

interface Board {
  id: string;
  color: string;
  name: string;
}

const New: React.FC = () => {
  const { themeColor, borderColor, textColor, bgFormMode } = useThemeColor();
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const workspaceId = useSelector(
    (state: RootState) => state.workspaces.currentWorkspaceId
  );
  const projectId = useSelector(
    (state: RootState) => state.projects.currentProject?.id
  );

  useEffect(() => {
    console.log(`workspaceId:${workspaceId} -- projectId:${projectId}`);
    if (workspaceId && projectId) {
      setLoading(true);
      getBoards(workspaceId, projectId)
        .then((response) => {
          console.log(response.data);
          setBoards(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to load boards:", error);
          setLoading(false);
        });
    }
  }, [workspaceId, projectId]);

  return (
    <div>
      <div
        className={` border border-t -translate-y-[29px] ${borderColor}`}
      ></div>
      {loading ? (
        <p>Loading boards...</p>
      ) : boards.length > 0 ? (
        boards.map((board) => (
          <>
            <div className={`bg-${board.color}-500 mb-[50px]`}>
              {board.color},{getHexColor(`bg-${board.color}-500`)}
            </div>
            <BoardItem
              key={board.id}
              color={getHexColor(`bg-${board.color}-500`)}
              label={board.name}
              className={`${bgFormMode} z-10 h-[40px] w-[250px] shadow-md rounded-[16px] text-xs border border-gray-100`}
              labelClassName="font-medium text-base"
              onAddNewCardClick={() => console.log("Add new card")}
              onMoreClick={() => console.log("More options")}
            />
          </>
        ))
      ) : (
        <CreateNewButton
          color={getHexColor(themeColor)}
          label="ساختن برد جدید"
          className={`h-[40px] w-[250px] shadow-md rounded-[16px]  text-xs border border-gray-100 ${textColor}`}
          labelClassName="font-medium	text-base	 "
          onClick={() => console.log("onClick")}
        />
      )}
    </div>
  );
};
export default New;
