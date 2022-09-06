/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            rotate: {
                135: "135deg",
            },
        },
    },
    plugins: [],
}
