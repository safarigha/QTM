import { DropdownProps } from "../../../configs/interfaces";
import useThemeColor from "../../../hooks/useThemeColor";

const Dropdown: React.FC<DropdownProps> = ({
  items,
  title,
  classNameTitle,
}) => {
  const { formModeStyle } = useThemeColor();
  return (
    <details className="dropdown">
      <summary className={`${classNameTitle}`}>{title}</summary>
      <ul
        className={`menu dropdown-content ${formModeStyle.bg} rounded-box z-[1] w-52 p-2 shadow`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </details>
  );
};
export default Dropdown;
