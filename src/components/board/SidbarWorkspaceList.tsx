import { ISidbarWorkspaceList } from "../../configs/interfaces";

const data = [
  {
    id: 643,
    name: "کارهای شخصی",
    color: "bg-orange-500",
  },
  {
    id: 645,
    name: "درس طراحی الگوریتم",
    color: "bg-blue-500",
  },
  {
    id: 642,
    name: "درس مدیریت پروژه",
    color: "bg-green-500",
  },
  {
    id: 644,
    name: "درس کامپایلر",
    color: "bg-red-500",
  },
];

const SidbarWorkspaceList: React.FC<ISidbarWorkspaceList> = () => {
  return (
    <div className="bg-white flex flex-col">
      {data.map((item) => (
        <div key={item.id} className="collapse">
          <input
            type="checkbox"
            id={`collapse-toggle-${item.id}`}
            className="peer"
          />
          <div className="collapse-title text-md font-medium">
            <label
              htmlFor={`collapse-toggle-${item.id}`}
              className="cursor-pointer flex items-center"
            >
              <div className={`size-[20px] ml-2 rounded-[4px] ${item.color}`} />
              {item.name}
            </label>
          </div>
          <div className="collapse-content">
            <p>اطلاعات بیشتر درباره {item.name}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidbarWorkspaceList;
