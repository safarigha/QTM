import { useEffect, useState } from "react";
import { IBoard } from "../../../configs/interfaces";
import { useSelector } from "react-redux";
import useThemeColor from "../../../hooks/useThemeColor";
import { RootState } from "../../../configs/servers/store";
import { getBoards } from "../../../configs/APIs/boardsApi";
import BoardItem from "../../../components/commons/UI/boardItems";
import { getHexColor } from "../../../helpers/getHexColor";
import NewBoardButton from "../../../components/commons/UI/buttons/NewBoardButton";

const Column: React.FC = () => {
  const { borderColor, formModeStyle } = useThemeColor();
  const [boards, setBoards] = useState<IBoard[]>([]);
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
        <p>
          در صورت عدم انتخاب پروژه، لطفا پروژه موردنظر خود را از "لیست فضای
          کاری" انتخاب نمایید در غیراینصورت لطفا شکیبا باشید
        </p>
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
            <NewBoardButton className={`flex-shrink-0`} />
          </div>
        </>
      ) : (
        <NewBoardButton />
      )}
    </div>
  );
};
export default Column;
