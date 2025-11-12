// tailwind-config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {

            },
            screens: {
                'xs': '480px', // Add xs size
            },
            fontFamily: {
                archivo: ['Archivo', 'sans-serif'],
            },
            fontSize: {
                'h1': '36px',
                'h2': '30px',
                'h3': '24px',
                'h4': '20px',
                'h5': '18px',
                'h6': '16px',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-shadow-xs': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
                },
                '.text-shadow-sm': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                },
                '.text-shadow-md': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-lg': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)',
                },
                '.text-shadow-xl': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                },
                '.text-shadow-none': {
                    textShadow: 'none',
                },
            });
        },
    ],
};
