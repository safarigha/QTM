import { IBackgroundAuth } from "../../../../configs/interfaces";
import { getHexColor } from "../../../../helpers/getHexColor";

const BackgroundAuth: React.FC<IBackgroundAuth> = ({ className }) => {
  return (
    <svg
      className={`absolute bottom-0 right-0 left-0 ${className}`}
      width="1440"
      height="574"
      viewBox="0 0 1440 574"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 260L1440 0V574H0V260Z" fill="url(#paint0_linear_0_316)" />
      <defs>
        <linearGradient
          id="paint0_linear_0_316"
          x1="1440"
          y1="257.5"
          x2="-55"
          y2="287"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={getHexColor("bg-brand-primary")} />
          <stop
            offset="50%"
            stopColor={getHexColor("bg-brand-primary")}
            stopOpacity="0.60"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackgroundAuth;
