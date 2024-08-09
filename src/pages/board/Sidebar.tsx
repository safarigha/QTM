import LogoTitle from "../../components/commons/UI/LogoTitle";
import { QTlogo } from "../../assets/images/images";
import IconInput from "../../components/commons/UI/IconInput";
import { CiSearch } from "react-icons/ci";
import CreateNewButton from "../../components/commons/UI/buttons/CreateNewButton";
import DropdownListList from "../../components/commons/UI/DropdownListList";
import SidbarWorkspaceList from "../../components/board/SidebarWorkspaceList";
import SidebarDisplayAccount from "../../components/board/SidebarDisplayAccount";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../configs/servers/store";
import SidebarLogoutAccount from "../../components/board/SidebarLogoutAccount";
import SwitchModeTheme from "../../components/commons/UI/SwitchModeTheme";
import New from "../../components/workspace/New";
import ModalView from "../../components/commons/UI/ModalView";
import { useSelector } from "react-redux";
import { fetchWorkspaces } from "../../configs/servers/workspaceSlice";

const Sidbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const workspaces = useSelector(
    (state: RootState) => state.workspaces.workspaces
  );

  const [isOpenNewWorkspace, setIsOpenNewWorkspace] = useState(false);
  const openNewWorkspace = () => setIsOpenNewWorkspace(true);
  const closeNewWorkspace = () => setIsOpenNewWorkspace(false);

  useEffect(() => {
    dispatch(fetchWorkspaces());
  }, [dispatch, workspaces.length]);

  return (
    <div className=" mt-[20px] h-screen w-[340px] flex flex-col border-brand-500 border-l-[0.5px] border-gray-200 overflow-y-auto scrollbar-gutter-stable">
      <LogoTitle label="کیوتی منیجر" logo={QTlogo} />
      <IconInput
        placeholder="جستجو کنید..."
        icon={<CiSearch className="size-6 ml-2" />}
        className=" w-[274px] h-[30px] rounded-[4px] mt-4 mr-auto ml-auto pr-2 text-sm "
      />
      <CreateNewButton
        color="#208D8E"
        label="ساختن فضای کاری جدید"
        className="w-[274px] h-[30px] rounded-[4px] mt-6 mr-auto ml-auto pr-2 text-sm border border-brand-primary text-brand-primary"
        labelClassName="text-sm"
        onClick={openNewWorkspace}
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
      <div className="flex items-center">
        <SidebarLogoutAccount className="justify-right mr-[15px] mt-4" />
        <SwitchModeTheme className="justify-left mr-auto ml-[15px] mt-4" />
      </div>
      <ModalView isOpen={isOpenNewWorkspace} onClose={closeNewWorkspace}>
        <New onClose={closeNewWorkspace} />
      </ModalView>
    </div>
  );
};

export default Sidbar;
