module.exports = {
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            },
            colors: {
                gray: {
                    50: '#F9FAFB',
                    300: '#F1F1F1',
                    400: '#E0E0E0',
                    500: '#AEAEAE',
                    600: '#7E7E7E',
                    900: '#303030',
                },
                blue: {
                    500: '#1976D2',
                    600: '#0C63D4',
                },
                teal: {
                    500: '#40B2B7',
                    600: '#188F95',
                },
                orange: {
                    500: '#F4694C',
                    600: '#ee5c3e',
                }
            }
        },
    },
    plugins: [],
}
