import { IRestoreTaskButton } from "../../../../configs/interfaces";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";

const RestoreTaskButton: React.FC<IRestoreTaskButton> = ({
  label,
  className,
  labelClassName,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer  ${className}`}
    >
      <div className="flex items-center justify-center">
        <PiArrowCounterClockwiseBold className="ml-1 size-[20px]" />
        <span className={`${labelClassName}]`}>{label}</span>
      </div>
    </button>
  );
};

export default RestoreTaskButton;
