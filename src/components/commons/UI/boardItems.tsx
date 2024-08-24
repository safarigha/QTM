import { IBoardItem } from "../../../configs/interfaces";
import { LuPlus, LuMoreHorizontal } from "react-icons/lu";

const BoardItem: React.FC<IBoardItem> = ({
  color,
  label,
  className,
  labelClassName,
  onAddNewCardClick,
  onMoreClick,
}) => {
  return (
    <div className="relative h-[44px] w-[250px] mb-2">
      <div
        className={`absolute top-0 left-0 right-0 z-0 h-[40px] shadow-md rounded-[16px] text-xs bg-[${color}]`}
      ></div>
      <div
        className={`absolute z-10 top-0 left-0 right-0 h-[40px] rounded-[16px] flex items-center ${className}`}
        style={{ transform: "translateY(3px)" }}
      >
        <p className={`gap-x-2 py-2 px-5 ${labelClassName}`}>{label}</p>
        <div className="flex items-left mr-auto justify-center px-5">
          <button onClick={onMoreClick}>
            <LuMoreHorizontal className="cursor-pointer size-4 ml-2" />
          </button>
          <button onClick={onAddNewCardClick}>
            <LuPlus className="cursor-pointer size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardItem;
