import { IRedButton } from "../../../../configs/interfaces";

const RedButton: React.FC<IRedButton> = ({
  text,
  classNames = "",
  type = "button",
  // ...props
}) => {
  return (
    <button
      type={type}
      className={`bg-red-primary text-white h-[30px] w-[111px] text-xs rounded ${classNames}`}
      // {...props}
    >
      {text}
    </button>
  );
};

export default RedButton;