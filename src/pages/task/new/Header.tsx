import CloseButton from "../../../components/commons/UI/buttons/CloseButton";
import useThemeColor from "../../../hooks/useThemeColor";
import SelectList from "../../../components/commons/UI/SelectList";
import { useSelector } from "react-redux";
import { RootState } from "../../../configs/servers/store";

const Header: React.FC = () => {
  const { themeColor } = useThemeColor();
  const projects = useSelector(
    (state: RootState) => state.projects.projectsByWorkspace["workspaceId"]
  ); // فرض می‌کنیم workspaceId به نوعی تعیین شده است

  const projectOptions = projects.map((project) => ({
    value: project.id,
    label: project.name,
  }));

  const handleProjectChange = (projectId: string) => {
    console.log("Selected Project ID:", projectId);
    // اینجا می‌توانید عملیاتی را بر اساس پروژه انتخاب شده انجام دهید
  };

  return (
    <>
      <div className="flex items-center mb-8 gap-[13px]">
        <div className={`size-4 ${themeColor} rounded-[2px]`}></div>
        <h1 className="font-medium text-2xl">عنوان تسک</h1>
        <CloseButton className="mr-auto size-6" />
      </div>
      <div className="flex items-center mb-8 gap-[10px]">
        <h2 className="flex items-center gap-[10px] text-base font-medium">
          در
          <SelectList
            options={projectOptions}
            placeholder="انتخاب پروژه"
            onChange={handleProjectChange}
          />
        </h2>
      </div>
    </>
  );
};

export default Header;
