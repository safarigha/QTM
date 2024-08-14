import React, { useEffect, useState } from "react";
import { PiMoonBold, PiSunDimBold } from "react-icons/pi";

interface ISwitchModeTheme {
  className?: string;
  onClick?: () => void;
}

const SwitchModeTheme: React.FC<ISwitchModeTheme> = ({
  className,
  onClick,
}) => {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.getItem("theme") !== "dark"
  );

  useEffect(() => {
    const theme = isLightMode ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [isLightMode]);

  const handleToggle = () => {
    setIsLightMode((prevMode) => {
      const newMode = !prevMode;
      const theme = newMode ? "light" : "dark";
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);

      if (onClick) {
        onClick();
      }

      return newMode;
    });
  };

  return (
    <div className={`${className}`}>
      <div className="flex-none">
        <button
          className={`relative rounded-[8px] w-[64px] h-[36px] ${
            isLightMode ? "bg-gray-200" : "bg-gray-800"
          }`}
          onClick={handleToggle}
        >
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isLightMode ? "justify-start" : "justify-end"
            } flex mt-1 mb-1`}
          >
            <div
              className={`swap-off ${
                isLightMode ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 ease-in-out mr-[3px] rounded-[8px] shadow-lg bg-white`}
            >
              <PiSunDimBold className="text-black size-[30px] p-1 text-center " />
            </div>
            <div
              className={`swap-on ${
                isLightMode ? "opacity-0" : "opacity-100"
              } transition-opacity duration-500 ease-in-out ml-[3px] bg-gray-500 rounded-[8px] shadow-lg`}
            >
              <PiMoonBold className="text-white size-[30px] p-1 text-center" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SwitchModeTheme;
