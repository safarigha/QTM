import { IIconInput } from "../../../configs/interfaces";
import useThemeColor from "../../../hooks/useThemeColor";

const IconInput: React.FC<IIconInput> = ({ placeholder, icon, className }) => {
  const { borderColor } = useThemeColor();
  return (
    <div
      className={` flex items-center bg-transparent focus:outline-brand-primary border ${borderColor} rounded-[4px] ${className}`}
    >
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        className="h-[30px] bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default IconInput;
