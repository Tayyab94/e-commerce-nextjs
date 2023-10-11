import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f29fdd",
          "secondary": "#f7bed2",
          "accent": "#5af418",
          "neutral": "#211f32",
          "base-100": "#e7e6ef",
          "info": "#90beea",
          "success": "#2ab785",
          "warning": "#f5c024",
          "error": "#f8125a",
          "body": {
            "background-color": "#e3e6e6"
          }
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
