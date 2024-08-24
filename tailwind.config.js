
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  safelist: [

    {
      pattern: /(bg|text|border|from|to)-(.*)-([1-9]00)/,
      variants: ['hover', 'focus'],
    },

    "bg-[#208D8E]",
    "bg-[#EF4444]",
    "bg-[#EC4899]",
    "bg-[#A855F7]",
    "bg-[#8B5CF6]",
    "bg-[#6366F1]",
    "bg-[#3B82F6]",
    "bg-[#06B6D4]",
    "bg-[#14B8A6]",
    "bg-[#10B981]",
    "bg-[#22C55E]",
    "bg-[#84CC16]",
    "bg-[#EAB308]",
    "bg-[#F97316]",
    "bg-[#6B7280]",
    "bg-[#6B7280]",

  ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-secondary": "#F1F3F5",
        "gray-primary": "#868E96",
        "gray-darker": "#343A40",
        "red-secondary": "#FFE3E3",
        "red-primary": "#FA5252",
        "pink-secondary": "#FFDEEB",
        "pink-primary": "#E64980",
        "grape-secondary": "#F3D9FA",
        "grape-primary": "#BE4BDB",
        "violet-secondary": "#E5DBFF",
        "violet-primary": "#7950F2",
        "indigo-secondary": "#DBE4FF",
        "indigo-primary": "#4C6EF5",
        "blue-secondary": "#D0EBFF",
        "blue-primary": "#228BE6",
        "cyan-secondary": "#C5F6FA",
        "cyan-primary": "#15AABF",
        "teal-secondary": "#C3FAE8",
        "teal-primary": "#12B886",
        "brand-secondary": "#C2F7FA",
        "brand-primary": "#208D8E",
        "green-secondary": "#D3F9D8",
        "green-primary": "#40C057",
        "lime-secondary": "#E9FAC8",
        "lime-primary": "#82C91E",
        "yellow-secondary": "#FFF3BF",
        "yellow-primary": "#FAB005",
        "orange-secondary": "#FFE8CC",
        "orange-primary": "#FD7E14",
      },
      fontFamily: {
        IranYekan: ["Iranyekan", "sans-serif"],
      },
      scrollbarGutter: {
        stable: 'stable',
      },
    },
  },
  plugins: [require("daisyui"),
  function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-gutter-stable': {
        'scrollbar-gutter': 'stable',
      },
    });
  },
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};




