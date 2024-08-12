import { IBrandColorButton } from "../../../../configs/interfaces";
import useThemeColor from "../../../../hooks/useThemeColor";

const BrandColorButton: React.FC<IBrandColorButton> = ({
  text,
  classNames = "",
  type = "button",
  disabled = false,
  onClick,
}) => {
  const { themeColor } = useThemeColor();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`items-center gap-2 rounded-md hover:opacity-90 ${themeColor} py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white ${classNames}`}
    >
      {text}
    </button>
  );
};

export default BrandColorButton;
