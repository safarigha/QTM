import { useEffect, useState } from "react";
import useThemeSettings from "../../../hooks/useThemeSetting";

const LoadingPage: React.FC = () => {
  const { fetchAndApplyThemeSettings } = useThemeSettings();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const applyTheme = async () => {
      await fetchAndApplyThemeSettings();
      setIsLoading(false);
    };
    applyTheme();
  }, [fetchAndApplyThemeSettings]);

  return isLoading ? (
    <div className="fixed  inset-0 flex items-center justify-center bg-white bg-opacity-5 backdrop-blur-md z-50">
      <span className=" bg-red-500 loading loading-bars  loading-lg"></span>
      <span className=" bg-blue-500 loading loading-bars  loading-lg"></span>
      <span className=" bg-yellow-500 loading loading-bars  loading-lg"></span>
      <span className=" bg-pink-500 loading loading-bars  loading-lg"></span>
      <span className=" bg-purple-500 loading loading-bars  loading-lg"></span>
      <span className=" bg-orange-500 loading loading-bars  loading-lg"></span>
    </div>
  ) : null;
};

export default LoadingPage;
