import { SelectListProps } from "../../../configs/interfaces";

const SelectList: React.FC<SelectListProps> = ({
  options,
  placeholder,
  selectedValue,
  onChange,
}) => {
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={selectedValue}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {placeholder && (
        <option disabled value="">
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectList;
