import { IIconInput } from "../../../configs/interfaces";

const IconInput: React.FC<IIconInput> = ({ placeholder, icon, className }) => {
  return (
    <div
      className={`flex items-center bg-gray-100 focus:outline-brand-primary rounded-[4px] ${className}`}
    >
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        className="bg-gray-100 focus:outline-none"
      />
    </div>
  );
};

export default IconInput;
