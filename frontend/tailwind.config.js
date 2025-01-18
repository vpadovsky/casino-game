/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/containers/**/*.{html,tsx}',
        './src/components/**/*.{html,tsx}'
    ],
    theme: {
        container: {
            maxWidth: "1360"
        },
    },
    plugins: [],
}

