import { IIconTitle } from "../../../configs/interfaces";
import useThemeColor from "../../../hooks/useThemeColor";

const IconTitle: React.FC<IIconTitle> = ({ label, logo, className }) => {
  const { textColor } = useThemeColor();

  return (
    <div className={`flex items-center ${textColor} ${className}`}>
      {logo}
      <h1 className={`mt-2`}>{label}</h1>
    </div>
  );
};

export default IconTitle;
