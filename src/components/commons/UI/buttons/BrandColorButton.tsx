import { IBrandColorButton } from "../../../../configs/interfaces";

const BrandColorButton: React.FC<IBrandColorButton> = ({
  text,
  classNames = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`items-center gap-2 rounded-md bg-brand-primary hover:bg-brand-primary/90 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white ${classNames}`}
    >
      {text}
    </button>
  );
};

export default BrandColorButton;
