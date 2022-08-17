module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    important: true,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/forms'),
    ],
}