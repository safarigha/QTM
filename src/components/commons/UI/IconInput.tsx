import { IIconInput } from "../../../configs/interfaces";

const IconInput: React.FC<IIconInput> = ({ placeholder, icon, className }) => {
  return (
    <div
      className={`flex items-center bg-transparent focus:outline-brand-primary border border-brand-primary rounded-[4px] ${className}`}
    >
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default IconInput;
