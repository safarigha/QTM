import { useState } from "react";
import { InewBoard } from "../../../../configs/interfaces";
import useThemeColor from "../../../../hooks/useThemeColor";
import ModalView from "../ModalView";
import CreateNewButton from "./CreateNewButton";
import New from "../../../board/New";

const NewBoardButton: React.FC<InewBoard> = ({ className }) => {
  const { formModeStyle } = useThemeColor();
  const [isOpenNewBoard, setIsOpenNewBoard] = useState(false);
  const openNewBoard = () => setIsOpenNewBoard(true);
  const closeNewBoard = () => setIsOpenNewBoard(false);

  return (
    <>
      <CreateNewButton
        color={formModeStyle.textCode}
        label="ساختن برد جدید"
        className={`h-[44px] w-[250px] ${formModeStyle.bg} shadow-md rounded-[16px] text-xs border border-gray-100 ${className} `}
        labelClassName="font-medium	text-base"
        onClick={openNewBoard}
      />
      <ModalView isOpen={isOpenNewBoard} onClose={closeNewBoard}>
        <New onClose={closeNewBoard} />
      </ModalView>
    </>
  );
};

export default NewBoardButton;
