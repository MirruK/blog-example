import type { Config } from "tailwindcss";

const disabledCss = {
    "code::before": false,
    "code::after": false,
    "blockquote p:first-of-type::before": false,
    "blockquote p:last-of-type::after": false,
    pre: false,
    code: false,
    "pre code": false,
};

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            body: ['"Open Sans"', '"Roboto"'],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            typography: {
                DEFAULT: { css: disabledCss },
                sm: { css: disabledCss },
                lg: { css: disabledCss },
                xl: { css: disabledCss },
                "2xl": { css: disabledCss },
            },
            maxWidth: {
                blogContent: "120ch",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
