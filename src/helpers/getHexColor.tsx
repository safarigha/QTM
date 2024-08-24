import { TailwindColorMap } from "../configs/interfaces";

const tailwindColorMap: TailwindColorMap = {
  "bg-red-500": "#EF4444",
  "bg-pink-500": "#EC4899",
  "bg-purple-500": "#A855F7",
  "bg-violet-500": "#8B5CF6",
  "bg-indigo-500": "#6366F1",
  "bg-blue-500": "#3B82F6",
  "bg-cyan-500": "#06B6D4",
  "bg-teal-500": "#14B8A6",
  "bg-emerald-500": "#10B981",
  "bg-green-500": "#22C55E",
  "bg-lime-500": "#84CC16",
  "bg-yellow-500": "#EAB308",
  "bg-orange-500": "#F97316",
  "bg-gray-500": "#6B7280",
  "bg-brand-primary": "#208D8E",
  "bg-black": "#000000",
  "bg-white": "#FFFFFF",
};

export const getHexColor = (tailwindColor: string): string => {
  return tailwindColorMap[tailwindColor] || "#6B7280";
};

export const getTailwindColor = (hexColor: string): string => {
  const tailwindColor = Object.keys(tailwindColorMap).find(
    (key) => tailwindColorMap[key] === hexColor
  );
  return tailwindColor || "bg-gray-500";
};
