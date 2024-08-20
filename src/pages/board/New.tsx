import CreateNewButton from "../../components/commons/UI/buttons/CreateNewButton";
import { getHexColor } from "../../helpers/getHexColor";
import useThemeColor from "../../hooks/useThemeColor";

const New: React.FC = () => {
  const { themeColor, borderColor, textColor } = useThemeColor();
  return (
    <div>
      <div className="border border-t -translate-y-[29px]"></div>
      <CreateNewButton
        color={getHexColor(themeColor)}
        label="ساختن برد جدید"
        className={`h-[40px] w-[250px] shadow-md rounded-[16px]  text-xs border border-gray-100 ${textColor}`}
        labelClassName="font-medium	text-base	 "
        // onClick={() => handleNewProject(workspace.id)}
      />
    </div>
  );
};
export default New;
