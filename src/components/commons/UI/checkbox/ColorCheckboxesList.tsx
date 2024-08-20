import React, { useState } from "react";
import Checkbox from "./Checkbox.tsx";
import { PiEmpty } from "react-icons/pi";
import { ColorCheckboxesListProps } from "../../../../configs/interfaces.ts";

const ColorCheckboxesList: React.FC<ColorCheckboxesListProps> = ({
  className,
  onColorChange,
}) => {
  const colorTheme = [
    { colorClass: "bg-red-500", name: "قرمز" },
    { colorClass: "bg-pink-500", name: "صورتی" },
    { colorClass: "bg-purple-500", name: "بنفش" },
    { colorClass: "bg-violet-500", name: "بنفش تیره" },
    { colorClass: "bg-indigo-500", name: "نیلی" },
    { colorClass: "bg-blue-500", name: "آبی" },
    { colorClass: "bg-cyan-500", name: "فیروزه‌ای" },
    { colorClass: "bg-teal-500", name: "سبز دریایی" },
    { colorClass: "bg-emerald-500", name: "زمردی" },
    { colorClass: "bg-green-500", name: "سبز" },
    { colorClass: "bg-lime-500", name: "لیمویی" },
    { colorClass: "bg-yellow-500", name: "زرد" },
    { colorClass: "bg-orange-500", name: "نارنجی" },
  ];

  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    null
  );

  const handleChange = (index: number) => {
    if (selectedColorIndex === index) {
      setSelectedColorIndex(null);
      onColorChange("bg-gray-500", "رنگ پیش‌فرض");
    } else {
      setSelectedColorIndex(index);
      onColorChange(colorTheme[index].colorClass, colorTheme[index].name);
    }
  };

  const handleResetColor = () => {
    setSelectedColorIndex(null);
    onColorChange("bg-gray-500", "پیش‌فرض");
  };

  return (
    <div className={`flex items-center ${className}`}>
      <PiEmpty
        onClick={handleResetColor}
        className="size-6 rounded-[8px] ml-1 text-gray-600 cursor-pointer hover:bg-transparent hover:border-2"
      />
      {colorTheme.map((color, index) => (
        <Checkbox
          key={index}
          checked={selectedColorIndex === index}
          onChange={() => handleChange(index)}
          colorClass={color.colorClass}
        />
      ))}
    </div>
  );
};

export default ColorCheckboxesList;
