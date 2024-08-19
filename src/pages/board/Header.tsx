import TabsForm from "../../components/commons/forms/TabsForm";
import { IHeader } from "../../configs/interfaces";
import {
  IoCalendarOutline,
  IoListOutline,
  IoGridOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import List from "./views/List";
import Column from "./views/Column";
import IconInput from "../../components/commons/UI/IconInput";
import { CiSearch } from "react-icons/ci";
import useThemeColor from "../../hooks/useThemeColor";
import { useState } from "react";
import IconTitle from "../../components/commons/UI/IconTitle";
import { CiFilter } from "react-icons/ci";
import RestoreTaskButton from "../../components/commons/UI/buttons/RestoreTaskButton";

const fields = [
  {
    id: 1,
    name: "ListView",
    label: "نمایش لیستی",
    icon: <IoListOutline className="size-6 ml-2" />,
    content: <List />,
  },
  {
    id: 2,
    name: "columnView",
    label: "نمایش ستونی",
    icon: <IoGridOutline className="size-6 ml-2" />,
    content: <Column />,
  },
  {
    id: 3,
    name: "calenderView",
    label: "تقویم",
    icon: <IoCalendarOutline className="size-6 ml-2" />,
    content: "Tab content 3",
  },
];

const Header: React.FC<IHeader> = ({ className }) => {
  const { textColor, borderColor } = useThemeColor();
  const [activeTab, setActiveTab] = useState<string>("");
  const shareProject = (
    <IconTitle
      logo={<IoShareSocialOutline className="font-medium text-base mt-2" />}
      label="اشتراک‌گذاری"
    />
  );
  const middleContent = activeTab !== "calenderView" && (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center pr-4">
          <IconInput
            placeholder="جستجو بین تسکها"
            icon={<CiSearch className={`size-4 ml-1 ${textColor}`} />}
            className={`w-[274px] h-[30px] text-xs mt-2 font-normal ${textColor}`}
          />
          <span className="px-4 mt-2">|</span>
          <IconTitle
            logo={
              <CiFilter className="size-[23px] font-normal text-xs mt-2 cursor-pointer" />
            }
            label="فیلتر"
          />
        </div>
        <RestoreTaskButton
          labelClassName="font-normal text-xs pl-2"
          label="بازگردانی تسکهای آرشیو شده"
          className={`border rounded-[8px] pr-2 pl-2 ${textColor} ${borderColor} mt-3`}
        />
      </div>
    </>
  );

  return (
    <div className={`flex items-center w-[1050px] mr-[16px] ${className}`}>
      <div className="flex-grow">
        <TabsForm
          fields={fields}
          className="font-medium text-base"
          onTabChange={(name) => setActiveTab(name)}
          children={shareProject}
          middleContent={middleContent}
          middleClassName="mb-4"
        />
      </div>
    </div>
  );
};

export default Header;
