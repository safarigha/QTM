
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
        "brand-primary": "#208D8E",
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




