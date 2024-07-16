import { ICloseButton } from "../../../../configs/interfaces";
import { RiCloseLine } from "react-icons/ri";

const CloseButton: React.FC<ICloseButton> = ({
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`items-center justify-center ${className}`}
      onClick={onClick}
    >
      <RiCloseLine />
    </button>
  );
};

export default CloseButton;
