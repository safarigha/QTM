import { ILogoTitle } from "../../../configs/interfaces";
import useThemeColor from "../../../hooks/useThemeColor";

const LogoTitle: React.FC<ILogoTitle> = ({ label, logo, className }) => {
  const { textColor } = useThemeColor();

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {logo}
      <h1 className={`font-black text-2xl ${textColor} mt-2`}>{label}</h1>
    </div>
  );
};

export default LogoTitle;
