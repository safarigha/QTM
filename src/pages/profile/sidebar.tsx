import React from "react";
import { Link } from "react-router-dom";
import BrandColorButton from "../../components/commons/UI/buttons/BrandColorButton";
import LogoTitle from "../../components/commons/UI/LogoTitle";
import QTlogo from "../../components/commons/UI/svgs/QTlogo";
import { SidebarProfileProps } from "../../configs/interfaces";
import {
  TbUserEdit,
  TbUserCheck,
  TbArrowNarrowRight,
  TbSettings,
} from "react-icons/tb";

const Sidebar: React.FC<SidebarProfileProps> = ({ onComponentChange }) => {
  const handleItemClick = (type: string) => {
    onComponentChange(type);
  };

  const sidebarItems = [
    {
      icon: <TbUserEdit className="size-6" />,
      text: "اطلاعات فردی",
      type: "personal",
    },
    {
      icon: <TbUserCheck className="size-6" />,
      text: "اطلاعات حساب",
      type: "account",
    },
    {
      icon: <TbSettings className="size-6" />,
      text: "تنظیمات",
      type: "setting",
    },
  ];

  return (
    <div className=" pt-[20px] h-screen w-[340px] flex flex-col border-brand-500 border-l-[0.5px] border-gray-200 overflow-y-auto scrollbar-gutter-stable">
      <LogoTitle
        className="pb-5 pt-2"
        label="کیوتی منیجر"
        logo={<QTlogo className={`size-[60px]`} />}
      />
      <BrandColorButton
        classNames="w-[135px] h-10 flex ml-auto mr-auto mt-4"
        type="submit"
        text={
          <>
            <TbArrowNarrowRight className="size-6 mr-2" />
            <Link to={"/board"}>
              <span>بازگشت</span>
            </Link>
          </>
        }
      />
      <div className="mt-[43px] ml-6 mr-[50px]">
        {sidebarItems.map((item, type) => (
          <div
            key={type}
            className="flex items-center mb-8 pr-4 pl-4 pt-2 pb-2 hover:bg-cyan-secondary hover:font-extrabold hover:text-sm rounded-[4px] h-10 w-[266px] cursor-pointer"
            onClick={() => handleItemClick(item.type)}
          >
            {item.icon}
            <h2 className="pr-[11px]">{item.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
