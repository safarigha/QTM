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
  onTabChange,
  defaultValue,
}) => {
  const [activeTab, setActiveTab] = useState<string>(fields[0].name);
  const { textColor } = useThemeColor();
  const currentProject = useSelector(
    (state: RootState) => state.projects.currentProject
  );
  const selectedField = fields.find((field) => field.name === activeTab);

  const handleTabClick = (name: string) => {
    setActiveTab(name);
    if (onTabChange) {
      onTabChange(name);
    }
  };

  return (
    <>
      <div className="flex items-center border-b-[2px] border-[#D2D4D7] ">
        <h2 className=" ml-2 pb-1 text-xl font-extrabold">
          {activeTab !== "managementView"
            ? currentProject?.name
              ? currentProject?.name
              : defaultValue
            : ""}
        </h2>
        <div className="translate-y-[3px]">
          <div className={`tabs tabs-bordered`}>
            {fields.map((field) => (
              <div
                key={field.id}
                onClick={() => handleTabClick(field.name)}
                className={`tab ${
                  activeTab === field.name ? `tab-active ${textColor}` : ""
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
      <div className="p-6">{selectedField?.content}</div>
    </>
  );
};

export default TabsForm;
