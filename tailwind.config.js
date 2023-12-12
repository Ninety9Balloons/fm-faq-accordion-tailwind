/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "work-sans": ['"Work Sans"', "sans-serif"],
            },
            colors: {
                "light-pink": "hsl(275, 100%, 97%)",
                "gray-purple": "hsl(292, 16%, 49%)",
                "dark-purple": "hsl(292, 42%, 14%)",
            },
        },
    },
    plugins: [],
};
