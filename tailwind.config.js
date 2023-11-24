/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("tw-elements/dist/plugin.cjs"),
        plugin(function ({ addVariant }) {
            addVariant("child", "&>*");
            addVariant("child-hover", "&>*:hover");
            addVariant("child-focus", "&>*:focus");
            addVariant("child-active", "&>*:active");
            addVariant("child-valid", "&>*:valid");
            addVariant("child-invalid", "&>*:invalid");
            addVariant("children", "& *");
            addVariant("children-hover", "& *:hover");
        }),
    ],
};
