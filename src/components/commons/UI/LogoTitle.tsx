import { ILogoTitle } from "../../../configs/interfaces";

const LogoTitle: React.FC<ILogoTitle> = ({ label, logo, className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img src={logo} className="size-[60px]" />
      <h1 className=" font-black text-2xl text-brand-primary mt-2">{label}</h1>
    </div>
  );
};

export default LogoTitle;
