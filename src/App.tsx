import Register from "./pages/auth/register/Register";
import LoadingPage from "./components/commons/UI/LoadingPage";

const App: React.FC = () => {
  return (
    <div>
      <LoadingPage />
      <Register />
    </div>
  );
};

export default App;
