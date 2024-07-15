import { ICloseButton } from "../../../../configs/interfaces";

const CloseButton: React.FC<ICloseButton> = ({
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`items-center justify-center ${className}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 8L16 16" />
        <path d="M16 8L8 16" />
      </svg>
    </button>
  );
};

export default CloseButton;
