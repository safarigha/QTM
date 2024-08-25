import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useThemeColor from "../../../hooks/useThemeColor";
import { RootState } from "../../../configs/servers/store";
import { getBoards } from "../../../configs/APIs/boardsApi";
import BoardItem from "../../../components/commons/UI/boardItems";
import { getHexColor } from "../../../helpers/getHexColor";
import CreateNewButton from "../../../components/commons/UI/buttons/CreateNewButton";

interface Board {
  id: string;
  color: string;
  name: string;
}

const Column: React.FC = () => {
  const { themeColor, borderColor, textColor, formModeStyle } = useThemeColor();
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const workspaceId = useSelector(
    (state: RootState) => state.workspaces.currentWorkspaceId
  );
  const projectId = useSelector(
    (state: RootState) => state.projects.currentProject?.id
  );
  useEffect(() => {
    if (workspaceId && projectId) {
      setLoading(true);
      getBoards(workspaceId, projectId)
        .then((response) => {
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
        className={`border border-t -translate-y-[29px] ${borderColor}`}
      ></div>
      {loading ? (
        <p>در حال بارگزاری اطلاعات ...</p>
      ) : boards.length > 0 ? (
        <>
          <div
            className="flex overflow-x-auto flex-nowrap gap-4 h-full "
            style={{ whiteSpace: "nowrap" }}
          >
            {boards.map((board) => (
              <BoardItem
                key={board.id}
                color={getHexColor(`bg-${board.color}-500`)}
                label={board.name}
                className={`flex-shrink-0 ${formModeStyle.bg} h-[40px] w-[250px] shadow-md rounded-[16px] text-xs border border-gray-100 `}
                labelClassName="font-medium text-base"
                onAddNewCardClick={() => console.log("Add new card")}
                onMoreClick={() => console.log("More options")}
              />
            ))}
            <CreateNewButton
              color={formModeStyle.textCode}
              label="ساختن برد جدید"
              className={`flex-shrink-0 ${formModeStyle.bg}  h-[44px] w-[250px] shadow-md rounded-[16px] text-xs border border-gray-100`}
              labelClassName="font-medium	text-base	 "
              onClick={() => console.log("onClick")}
            />
          </div>
        </>
      ) : (
        <CreateNewButton
          color={getHexColor(themeColor)}
          label="ساختن برد جدید"
          className={` h-[44px] w-[250px] shadow-md rounded-[16px] text-xs border border-gray-100 ${textColor}`}
          labelClassName="font-medium	text-base	 "
          onClick={() => console.log("onClick")}
        />
      )}
    </div>
  );
};
export default Column;
