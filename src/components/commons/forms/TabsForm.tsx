import React, { useState } from "react";
import { TabsFormProps } from "../../../configs/interfaces";
import useThemeColor from "../../../hooks/useThemeColor";

const TabsForm: React.FC<TabsFormProps> = ({
  fields,
  className,
  // middleContent,
  // middleClassName,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const { textColor } = useThemeColor();

  return (
    <div>
      <div className={`tabs tabs-bordered`}>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className={`tab ${
              activeTab === index ? `tab-active ${textColor}` : ""
            } ${className} `}
          >
            {field.icon}
            {field.label}
          </div>
        ))}
      </div>
      {/* <div className={middleClassName}>{middleContent}</div> */}
      <div className="p-10">{fields[activeTab]?.content}</div>
    </div>
  );
};

export default TabsForm;
