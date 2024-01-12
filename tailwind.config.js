/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
    darkMode: 'class',
    mode: 'jit',
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            boxShadow: {
                'centered-5-5': '0 0 5px 5px rgba(0, 0, 0, 0.3)',
                'centered-7-5': '0 0 7px 5px rgba(0, 0, 0, 0.3)',
                'centered-10-5': '0 0 10px 5px rgba(0, 0, 0, 0.3)',
                'prestige-btn': [
                    '0 0 5px rgba(0, 0, 0, 0.3)',
                    '0 0 15px rgba(0, 0, 0, 0.3)',
                    '0 0 30px rgba(0, 0, 0, 0.3)',
                    '0 0 60px rgba(0, 0, 0, 0.3)',
                ],
            },
            dropShadow: {
                'white-sm': ['0 2px 4px rgb(255 255 255)'],
                'black-sm': ['0 2px 4px rgb(0 0 0)'],
                white: [
                    '0 0px 10px rgb(255 255 255)',
                    '0 0px 60px rgb(255 255 255)',
                ],
                black: ['0 0px 10px rgb(0 0 0)', '0 0px 60px rgb(0 0 0)'],
            },
            fontFamily: {
                poppins: '"Poppins", sans-serif',
                'black-ops': '"Black Ops One", cursive, sans-serif',
            },
            textStroke: {
                'white-1': '1px rgb(255 255 255)',
                'white-2': '2px rgb(255 255 255)',
                'black-1': '1px rgb(0 0 0)',
                'black-2': '2px rgb(0 0 0)',
                'indigo-100-1': '1px rgb(224 231 255)',
                'indigo-200-1': '1px rgb(191 204 255)',
                'indigo-300-1': '1px rgb(165 180 252)',
                'indigo-400-1': '1px rgb(129 140 248)',
                'indigo-500-1': '1px rgb(99 102 241)',
                'indigo-600-1': '1px rgb(79 70 229)',
                'indigo-700-1': '1px rgb(67 56 202)',
                'indigo-800-1': '1px rgb(55 48 163)',
                'zinc-300-0.5': '.5px rgb(212 212 216)',
                'zinc-400-0.5': '.5px rgb(161 161 170)',
                'zinc-500-0.5': '.5px rgb(113 113 122)',
                'zinc-600-0.5': '.5px rgb(82 82 91)',
                'zinc-700-0.5': '.5px rgb(63 63 70)',
                'zinc-800-0.5': '.5px rgb(39 39 42)',
            },
            textShadow: {
                'zinc-900-1': '0 0 1px rgb(24 24 27)',
                'zinc-900-2': '0 0 2px rgb(24 24 27)',
                'zinc-900-3': '0 0 3px rgb(24 24 27)',
                'zinc-900-5': '0 0 5px rgb(24 24 27)',
                'zinc-900-10': '0 0 10px rgb(24 24 27)',
                'zinc-900-15': '0 0 15px rgb(24 24 27)',
                'zinc-900-20': '0 0 20px rgb(24 24 27)',
                'zinc-900-25': '0 0 25px rgb(24 24 27)',
                'zinc-900-30': '0 0 30px rgb(24 24 27)',
                'zinc-100-5': '0 0 5px rgb(244 244 245)',
                'zinc-100-10': '0 0 10px rgb(244 244 245)',
                'zinc-100-15': '0 0 15px rgb(244 244 245)',
                'zinc-100-20': '0 0 20px rgb(244 244 245)',
                'zinc-100-25': '0 0 25px rgb(244 244 245)',
                'zinc-100-30': '0 0 30px rgb(244 244 245)',
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('child', '&>*');
            addVariant('child-hover', '&>*:hover');
            addVariant('child-focus', '&>*:focus');
            addVariant('child-active', '&>*:active');
            addVariant('child-valid', '&>*:valid');
            addVariant('child-invalid', '&>*:invalid');
            addVariant('children', '& *');
            addVariant('children-hover', '& *:hover');
        }),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-stroke': (value) => ({
                        '-webkit-text-stroke': value,
                    }),
                },
                { values: theme('textStroke') },
            );
        }),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') },
            );
        }),
    ],
};
