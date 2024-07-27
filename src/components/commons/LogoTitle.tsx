import { QTlogo } from "../../assets/images/images";
const LogoTitle = () => {
  return (
    <div className="bg-white mr-[50px] pt-10 h-screen w-[340] flex flex-col items-center border-solid border-l-[0.5px] border-gray-primary">
      <img src={QTlogo} className="size-[100px]" />
      <h1 className=" font-black text-4xl text-brand-primary mt-4">
        کیوتی‌منیجر
      </h1>
    </div>
  );
};

export default LogoTitle;
