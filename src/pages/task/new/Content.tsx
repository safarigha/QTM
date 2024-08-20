import useThemeColor from "../../../hooks/useThemeColor";

const Content: React.FC = () => {
  const { borderColor } = useThemeColor();
  return (
    <textarea
      className={`flex mb-8 w-full max-w-[1089px] h-[191px] text-base font-medium p-4 border rounded-[12px] text-wrap focus:outline-none focus:${borderColor}`}
      placeholder="توضیحاتی برای این تسک بنویسید"
    />
  );
};

export default Content;
