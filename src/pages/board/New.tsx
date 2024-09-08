import CreateNewButton from "../../components/commons/UI/buttons/CreateNewButton";
import { InewBoard } from "../../configs/interfaces";
import useThemeColor from "../../hooks/useThemeColor";

const New: React.FC<InewBoard> = ({ className }) => {
  const { formModeStyle } = useThemeColor();

  return (
    <CreateNewButton
      color={formModeStyle.textCode}
      label="ساختن برد جدید"
      className={`h-[44px] w-[250px] ${formModeStyle.bg} shadow-md rounded-[16px] text-xs border border-gray-100 ${className} `}
      labelClassName="font-medium	text-base"
      onClick={() => console.log("onClick")}
    />
  );
};

export default New;
