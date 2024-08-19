import { useState } from "react";
import CreateNewButton from "../../components/commons/UI/buttons/CreateNewButton";
import { IFooter } from "../../configs/interfaces";
import ModalView from "../../components/commons/UI/ModalView";
import New from "../../components/workspace/New";
import useThemeColor from "../../hooks/useThemeColor";

const Footer: React.FC<IFooter> = () => {
  const { themeColor } = useThemeColor();
  const [isOpenNewTask, setIsOpenNewTask] = useState(false);
  const openNewTask = () => setIsOpenNewTask(true);
  const closeNewTask = () => setIsOpenNewTask(false);
  return (
    <div className="fixed left-[50px] bottom-6 ml-[16px] z-50">
      <CreateNewButton
        color="#FFFFFF"
        label="تسک جدید"
        className={`w-[150px] h-[40px] rounded-[6px] text-sm border ${themeColor} text-white`}
        labelClassName="text-sx"
        onClick={openNewTask}
      />
      <ModalView isOpen={isOpenNewTask} onClose={closeNewTask}>
        <New onClose={closeNewTask} />
      </ModalView>
    </div>
  );
};

export default Footer;
