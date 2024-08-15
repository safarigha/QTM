import TabsForm from "../../components/commons/forms/TabsForm";
import IconTitle from "../../components/commons/UI/IconTitle";
import { IHeader } from "../../configs/interfaces";
import {
  IoCalendarOutline,
  IoListOutline,
  IoGridOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import List from "./views/List";
import Column from "./views/Column";
import { useSelector } from "react-redux";
import { RootState } from "../../configs/servers/store";
// import IconInput from "../../components/commons/UI/IconInput";
// import { CiSearch } from "react-icons/ci";
// import useThemeColor from "../../hooks/useThemeColor";

const fields = [
  {
    id: "ListView",
    label: "نمایش لیستی",
    icon: <IoListOutline className="size-6 ml-2" />,
    content: <List />,
  },
  {
    id: "columnView",
    label: "نمایش ستونی",
    icon: <IoGridOutline className="size-6 ml-2" />,
    content: <Column />,
  },
  {
    id: "calenderView",
    label: "تقویم",
    icon: <IoCalendarOutline className="size-6 ml-2" />,
    content: "Tab content 3",
  },
];

const Header: React.FC<IHeader> = ({ className }) => {
  // const { textColor } = useThemeColor();
  const currentProject = useSelector(
    (state: RootState) => state.projects.currentProject
  );

  return (
    <div
      className={`flex items-center w-[900px] mr-[16px] ml-[50px] ${className}  `}
    >
      <div className="flex items-center">
        <h2 className="-translate-y-[76px] ml-2 text-xl	font-extrabold	">
          {currentProject?.name}
        </h2>
        <div>
          <TabsForm
            fields={fields}
            className="font-medium text-base"
            // middleContent={
            //   <IconInput
            //     placeholder="جستجو بین تسکها"
            //     icon={<CiSearch className={`size-4 ml-1 ${textColor}`} />}
            //     className={`w-[274px] h-[30px] rounded-[4px] mt-4 mr-auto ml-auto pr-2 text-xs font-normal ${textColor}`}
            //   />
            // }
            // middleClassName="border-b w-full"
          />
        </div>
      </div>
      <IconTitle
        logo={
          <IoShareSocialOutline className="font-medium text-base mt-2 ml-[0.5px]" />
        }
        label="اشتراک‌گذاری"
        className="items-center -translate-y-[76px] mr-auto"
      />
    </div>
  );
};

export default Header;
