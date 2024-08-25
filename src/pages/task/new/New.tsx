import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import useThemeColor from "../../../hooks/useThemeColor";

const New: React.FC = () => {
  const { formModeStyle } = useThemeColor();
  return (
    <div className={`flex items-center justify-center min-h-screen `}>
      <form
        className={`w-[1153px] rounded-[20px] shadow-lg ${formModeStyle.bg}`}
      >
        <div className="m-8 flex flex-col">
          <Header />
          <Content />
          <Footer />
        </div>
      </form>
    </div>
  );
};

export default New;
