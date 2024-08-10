import React, { useState } from "react";
import Personal from "./Personal";
import Sidebar from "./Sidebar";
import Account from "./Account";
import Settings from "./Setting";

const Profile: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("personal");
  const handleComponentChange = (type: string) => {
    setActiveComponent(type);
  };
  return (
    <div className="grid grid-cols-4 h-screen ">
      <div className="col-span-1 w-[340px]">
        <Sidebar onComponentChange={handleComponentChange} />
      </div>
      <div className="col-span-3 flex justify-center mt-[70px]">
        {activeComponent === "personal" && <Personal />}
        {activeComponent === "account" && <Account />}
        {activeComponent === "setting" && <Settings />}
      </div>
    </div>
  );
};

export default Profile;
