import Register from "./pages/auth/register/Register";
import { useEffect } from "react";
import useThemeSettings from "./hooks/useThemeSetting";

const App: React.FC = () => {
  const { loadThemeFromLocalStorage } = useThemeSettings();

  useEffect(() => {
    loadThemeFromLocalStorage();
  }, [loadThemeFromLocalStorage]);

  return (
    <div>
      <Register />
    </div>
  );
};

export default App;
