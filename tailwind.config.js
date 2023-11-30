/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
    darkMode: 'class',
    mode: 'jit',
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {},
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
    ],
};
