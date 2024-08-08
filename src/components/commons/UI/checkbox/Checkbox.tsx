import React from "react";
import { CheckboxProps } from "../../../../configs/interfaces";

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  colorClass,
  className,
}) => {
  return (
    <label
      className={`relative inline-flex items-center cursor-pointer m-[5px] ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`relative transition-all duration-300 size-6 rounded-[8px] ${colorClass}`}
        style={{
          borderColor: colorClass.replace("bg-", "border-"),
          borderWidth: "2px",
        }}
      >
        {checked && (
          <span className="absolute inset-0 m-auto size-3 rounded-full bg-white"></span>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
