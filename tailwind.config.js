/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                main: "linear-gradient(19deg, rgba(147,0,255,1) 18%, rgba(169,166,248,1) 84%)",
            },
            screens: {
                s: "320px",
                xs: "500px",
            },
            colors: {
                main: "#9300ff",
            },
        },
    },
    plugins: [],
};
