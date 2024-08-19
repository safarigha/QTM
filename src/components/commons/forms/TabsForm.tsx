import React, { useState } from "react";
import { TabsFormProps } from "../../../configs/interfaces";
import useThemeColor from "../../../hooks/useThemeColor";
import { useSelector } from "react-redux";
import { RootState } from "../../../configs/servers/store";

const TabsForm: React.FC<TabsFormProps> = ({
  fields,
  className,
  middleContent,
  middleClassName,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const { textColor } = useThemeColor();
  const currentProject = useSelector(
    (state: RootState) => state.projects.currentProject
  );

  return (
    <>
      <div className="flex items-center w-[1050px] mr-[16px] border-b-[2px] border-[#D2D4D7] ">
        <h2 className=" ml-2 pb-1 text-xl font-extrabold">
          {currentProject?.name}
        </h2>
        <div className="translate-y-[3px]">
          <div className={`tabs tabs-bordered`}>
            {fields.map((field, index) => (
              <div
                key={field.id}
                onClick={() => setActiveTab(index)}
                className={`tab ${
                  activeTab === index ? `tab-active ${textColor}` : ""
                } ${className} `}
              >
                {field.icon}
                {field.label}
              </div>
            ))}
          </div>
        </div>
        <div className=" mr-auto ml-2 pb-1 cursor-pointer">{children}</div>
      </div>
      <div className={middleClassName}>{middleContent}</div>
      <div className="p-10 bg-red-500">{fields[activeTab]?.content}</div>
    </>
  );
};

export default TabsForm;
