import { ILogoTitle } from "../../../configs/interfaces";
import useThemeColor from "../../../hooks/useThemeColor";
import QTlogo from "./svgs/QTlogo";

const LogoTitle: React.FC<ILogoTitle> = ({ label, logo, className }) => {
  const { textColor, themeColor } = useThemeColor();

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <QTlogo className={`size-[60px]`} />
      {/* <img src={logo} className="size-[60px]" /> */}
      <h1 className={`font-black text-2xl ${textColor} mt-2`}>{label}</h1>
    </div>
  );
};

export default LogoTitle;
