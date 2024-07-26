import React from "react";
import Register from "./pages/auth/register/Register";
import { ToastProvider } from "./hooks/useToast";

const App: React.FC = () => {
  return (
    <div>
      <ToastProvider />
      <Register />
    </div>
  );
};

export default App;
