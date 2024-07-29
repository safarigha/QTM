import LogoTitle from "../../components/commons/UI/LogoTitle";
import { QTlogo } from "../../assets/images/images";
import IconInput from "../../components/commons/UI/IconInput";
import { CiSearch } from "react-icons/ci";
import CreateNewButton from "../../components/commons/UI/buttons/CreateNewButton";
import DropdownListList from "../../components/commons/UI/DropdownListList";
import SidbarWorkspaceList from "../../components/board/SidebarWorkspaceList";
import SidebarDisplayAccount from "../../components/board/SidebarDisplayAccount";
import { useEffect } from "react";
import { fetchAccount } from "../../configs/servers/accountSlice";
import { useAppDispatch } from "../../configs/servers/store";
import SidebarLogoutAccount from "../../components/board/SidebarLogoutAccount";

const Sidbar: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAccount());
  }, [dispatch]);
  return (
    <div className="bg-white mt-[20px] h-screen w-[340px] flex flex-col border-brand-500 border-l-[0.5px] border-gray-200 overflow-y-auto">
      <LogoTitle label="کیوتی منیجر" logo={QTlogo} />
      <IconInput
        placeholder="جستجو کنید..."
        icon={<CiSearch className="size-6 ml-2" />}
        className="w-[274px] h-[30px] rounded-[4px] mt-4 mr-auto ml-auto pr-2 text-sm"
      />
      <CreateNewButton
        color="#208D8E"
        label="ساختن فضای کاری جدید"
        className="w-[274px] h-[30px] rounded-[4px] mt-6 mr-auto ml-auto pr-2 text-sm border border-brand-primary bg-white"
        labelClassName="text-sm"
      />
      <DropdownListList
        title="لیست فضای کاری"
        content={<SidbarWorkspaceList data={[]} />}
        iconType="collapse-arrow"
        titleClassName="text-md font-bold"
        className="mt-4"
        contentlassName="my-[-15px]"
      />
      <SidebarDisplayAccount className="justify-right mr-[15px]" />
      <SidebarLogoutAccount className="justify-right mr-[15px] mt-4" />
    </div>
  );
};

export default Sidbar;
