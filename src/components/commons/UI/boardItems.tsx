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
    <div className="relative -translate-y-[12px]">
      {/* <div
        className={`absolute top-0 left-0 right-0 z-0 -translate-y-[2px] h-[40px] w-[250px] shadow-md rounded-[16px] text-xs bg-[${color}]`}
      ></div> */}
      <div className={` rounded-2xl flex items-center ${className}`}>
        <div className="flex items-center justify-center gap-x-2 py-6 px-5 rounded-2xl">
          <p className={` ${labelClassName}`}>{label}</p>
          <button onClick={onMoreClick}>
            <LuMoreHorizontal className="cursor-pointer size-4 " />
          </button>
          <button onClick={onAddNewCardClick}></button>

          <LuPlus className="cursor-pointer  size-4" />
        </div>
      </div>
    </div>
  );
};

export default BoardItem;
