import { ISidebarDropdown } from "../../../configs/interfaces";

const DropdownListList: React.FC<ISidebarDropdown> = ({
  title,
  content,
  className,
  titleClassName,
  contentlassName,
  //iconType: collapse-arrow OR collapse-plus
  iconType = "",
}) => {
  return (
    <div className={`mt-2 W-full flex flex-col ${className}`}>
      <div className={`collapse ${iconType}`}>
        <input type="checkbox" id="collapse-toggle" className="peer" />
        <div className="collapse-title text-xl font-medium">
          <label
            htmlFor="collapse-toggle"
            className={`cursor-pointer ${titleClassName}`}
          >
            {title}
          </label>
        </div>
        <div className={`collapse-content ${contentlassName}`}>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default DropdownListList;
