///استفاده نشده

import { FlexDirection, ISimpleButton } from "../../../../configs/interfaces";

const SimpleButton: React.FC<ISimpleButton> = ({
  text,
  onClick,
  classNames = "",
  type = "button",
  isOpen = false,
  icon,
  flexDirection = FlexDirection.Row,
  // ...props
}) => {
  const flexDirectionStyle = { flexDirection };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex border-[1.5px] bg-white rounded-[6px] pt-[3px] pr-[12px] pb-[2px] pl-[12px] text-xs font-normal ${classNames}`}
      style={flexDirectionStyle}
      // {...props}
    >
      {isOpen &&
        icon &&
        (typeof icon === "string" ? (
          <img src={icon} className="size-[18px]" alt="icon" />
        ) : (
          <span className="size-[18px]">{icon}</span>
        ))}
      <span>{text}</span>
    </button>
  );
};

export default SimpleButton;
