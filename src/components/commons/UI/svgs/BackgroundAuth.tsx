import useThemeColor from "../../../../hooks/useThemeColor";
import { getHexColor } from "../../../../helpers/getHexColor";

interface IBackgroundAuth {
  className?: string;
}

const BackgroundAuth: React.FC<IBackgroundAuth> = ({ className }) => {
  const { themeColor } = useThemeColor();

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
          <stop stop-color={getHexColor(themeColor)} />
          <stop
            offset="50%"
            stopColor={getHexColor(themeColor)}
            stopOpacity="0.60"
          />

          {/* <stop offset="1" stop-color="#ffffff" /> */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackgroundAuth;
