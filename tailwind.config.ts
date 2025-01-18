import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      "x-tight": "-0.044rem",
      tightest: "-0.03rem",
      tighter: "-0.020rem",
      tight: "-0.01rem",
      normal: "0rem",
      wide: "0.008rem",
      wider: "0.016rem",
      widest: "0.028rem",
      "x-wide": "0.032rem",
      "2x-wide": "0.036rem",
      "3x-wide": "0.040rem",
      "4x-wide": "0.044rem",
    },
    fontSize: {
      "2xs": "0.702rem",
      xs: "0.790rem",
      sm: "0.889rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.266rem",
      "2xl": "1.424rem",
      "3xl": "1.602rem",
      "4xl": "1.802rem",
      "5xl": "2.027rem",
      "6xl": "2.280rem",
      "7xl": "2.565rem",
    },
    extend: {
      fontFamily: {
        "josefin-slab": ["var(--font-josefin-slab)"],
        parkinsans: ["var(--font-parkinsans)"],
        'josefin-sans': ["var(--font-josefin-sans)"],
      },
      backgroundImage: {
        "gradient-mesh": `
          radial-gradient(circle at 10% 10%, rgb(var(--secondary-lower)) 10%, transparent 60%),
          radial-gradient(circle at 30% 20%, rgb(var(--primary-lower)) 15%, transparent 70%),
          radial-gradient(circle at 50% 30%, rgb(var(--primary-lower)) 20%, transparent 75%),
          radial-gradient(circle at 70% 40%, rgb(var(--tertiary-lower)) 25%, transparent 80%),
          radial-gradient(circle at 90% 50%, rgb(var(--primary-lower)) 30%, transparent 85%),
          radial-gradient(circle at 10% 70%, rgb(var(--primary-lower)) 35%, transparent 90%),
          radial-gradient(circle at 30% 90%, rgb(var(--tertiary-lower)) 40%, transparent 95%)
        `,
      },
      borderRadius: {
        xl: "5rem",
        lg: "4rem",
        md: "3rem",
        sm: "2rem",
        xs: "1rem",
        '2xs': "0.5rem"
      },
      boxShadow: {
        black:
          "var(--box-shadow-x) var(--box-shadow-y) 0px rgb(0 0 0)",
        primary:
          "var(--box-shadow-x) var(--box-shadow-y) 0px rgb(var(--primary-fixed-darkest))",
        secondary:
          "var(--box-shadow-x) var(--box-shadow-y) 0px rgb(var(--secondary-fixed-darkest))",
        tertiary:
          "var(--box-shadow-x) var(--box-shadow-y) 0px rgb(var(--tertiary-fixed-darkest))",
        success:
          "var(--box-shadow-x) var(--box-shadow-y) 0px rgb(var(--success-fixed-darkest))",
        info:
          "var(--box-shadow-x) var(--box-shadow-y) 0px rgb(var(--info-fixed-darkest))",
        warning:
          "var(--box-shadow-x) var(--box-shadow-y) 0px rgb(var(--warning-fixed-darkest))",
        danger:
          "var(--box-shadow-x) var(--box-shadow-y) 0px rgb(var(--danger-fixed-darkest))",
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        shadow: "rgb(var(--primary-container) / <alpha-value>)",
        scrim: "rgb(var(--scrim) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          variant: "rgb(var(--surface-variant) / <alpha-value>)",
          dim: "rgb(var(--surface-dim) / <alpha-value>)",
          bright: "rgb(var(--surface-bright) / <alpha-value>)",
          container: {
            lowest: "rgb(var(--surface-container-lowest) / <alpha-value>)",
            low: "rgb(var(--surface-container-low) / <alpha-value>)",
            DEFAULT: "rgb(var(--surface-container) / <alpha-value>)",
            high: "rgb(var(--surface-container-high) / <alpha-value>)",
            highest: "rgb(var(--surface-container-highest) / <alpha-value>)",
          },
        },
        outline: {
          DEFAULT: "rgb(var(--outline) / <alpha-value>)",
          variant: "rgb(var(--outline-variant) / <alpha-value>)",
        },
        inverse: {
          surface: "rgb(var(--inverse-surface) / <alpha-value>)",
          "on-surface": "rgb(var(--inverse-on-surface) / <alpha-value>)",
          primary: "rgb(var(--inverse-primary) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          container: "rgb(var(--primary-container) / <alpha-value>)",
          higher: "rgb(var(--primary-higher) / <alpha-value>)",
          high: "rgb(var(--primary-high) / <alpha-value>)",
          mid: "rgb(var(--primary-mid) / <alpha-value>)",
          low: "rgb(var(--primary-low) / <alpha-value>)",
          lower: "rgb(var(--primary-lower) / <alpha-value>)",
          fixed: {
            dim: "rgb(var(--primary-fixed-dim) / <alpha-value>)",
            DEFAULT: "rgb(var(--primary-fixed) / <alpha-value>)",
            dark: "rgb(var(--primary-fixed-dark) / <alpha-value>)",
            darker: "rgb(var(--primary-fixed-darker) / <alpha-value>)",
            darkest: "rgb(var(--primary-fixed-darkest) / <alpha-value>)",
            },
          },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          container: "rgb(var(--secondary-container) / <alpha-value>)",
          higher: "rgb(var(--secondary-higher) / <alpha-value>)",
          high: "rgb(var(--secondary-high) / <alpha-value>)",
          mid: "rgb(var(--secondary-mid) / <alpha-value>)",
          low: "rgb(var(--secondary-low) / <alpha-value>)",
          lower: "rgb(var(--secondary-lower) / <alpha-value>)",
          fixed: {
            dim: "rgb(var(--secondary-fixed-dim) / <alpha-value>)",
            DEFAULT: "rgb(var(--secondary-fixed) / <alpha-value>)",
            dark: "rgb(var(--secondary-fixed-dark) / <alpha-value>)",
            darker: "rgb(var(--secondary-fixed-darker) / <alpha-value>)",
            darkest: "rgb(var(--secondary-fixed-darkest) / <alpha-value>)",
            },
        },
        tertiary: {
          DEFAULT: "rgb(var(--tertiary) / <alpha-value>)",
          container: "rgb(var(--tertiary-container) / <alpha-value>)",          
          higher: "rgb(var(--tertiary-higher) / <alpha-value>)",
          high: "rgb(var(--tertiary-high) / <alpha-value>)",
          mid: "rgb(var(--tertiary-mid) / <alpha-value>)",
          low: "rgb(var(--tertiary-low) / <alpha-value>)",
          lower: "rgb(var(--tertiary-lower) / <alpha-value>)",
          fixed: {
            dim: "rgb(var(--tertiary-fixed-dim) / <alpha-value>)",
            DEFAULT: "rgb(var(--tertiary-fixed) / <alpha-value>)",
            dark: "rgb(var(--tertiary-fixed-dark) / <alpha-value>)",
            darker: "rgb(var(--tertiary-fixed-darker) / <alpha-value>)",
            darkest: "rgb(var(--tertiary-fixed-darkest) / <alpha-value>)",
            },
        },
        success: {
          DEFAULT: "rgb(var(--success) / <alpha-value>)",
          container: "rgb(var(--success-container) / <alpha-value>)",          
          higher: "rgb(var(--success-higher) / <alpha-value>)",
          high: "rgb(var(--success-high) / <alpha-value>)",
          mid: "rgb(var(--success-mid) / <alpha-value>)",
          low: "rgb(var(--success-low) / <alpha-value>)",
          lower: "rgb(var(--success-lower) / <alpha-value>)",
          fixed: {
            dim: "rgb(var(--success-fixed-dim) / <alpha-value>)",
            DEFAULT: "rgb(var(--success-fixed) / <alpha-value>)",
            dark: "rgb(var(--success-fixed-dark) / <alpha-value>)",
            darker: "rgb(var(--success-fixed-darker) / <alpha-value>)",
            darkest: "rgb(var(--success-fixed-darkest) / <alpha-value>)",
            },
        },
        info: {
          DEFAULT: "rgb(var(--info) / <alpha-value>)",
          container: "rgb(var(--info-container) / <alpha-value>)",          
          higher: "rgb(var(--info-higher) / <alpha-value>)",
          high: "rgb(var(--info-high) / <alpha-value>)",
          mid: "rgb(var(--info-mid) / <alpha-value>)",
          low: "rgb(var(--info-low) / <alpha-value>)",
          lower: "rgb(var(--info-lower) / <alpha-value>)",
          fixed: {
            dim: "rgb(var(--info-fixed-dim) / <alpha-value>)",
            DEFAULT: "rgb(var(--info-fixed) / <alpha-value>)",
            dark: "rgb(var(--info-fixed-dark) / <alpha-value>)",
            darker: "rgb(var(--info-fixed-darker) / <alpha-value>)",
            darkest: "rgb(var(--info-fixed-darkest) / <alpha-value>)",
            },
        },
        warning: {
          DEFAULT: "rgb(var(--warning) / <alpha-value>)",
          container: "rgb(var(--warning-container) / <alpha-value>)",          
          higher: "rgb(var(--warning-higher) / <alpha-value>)",
          high: "rgb(var(--warning-high) / <alpha-value>)",
          mid: "rgb(var(--warning-mid) / <alpha-value>)",
          low: "rgb(var(--warning-low) / <alpha-value>)",
          lower: "rgb(var(--warning-lower) / <alpha-value>)",
          fixed: {
            dim: "rgb(var(--warning-fixed-dim) / <alpha-value>)",
            DEFAULT: "rgb(var(--warning-fixed) / <alpha-value>)",
            dark: "rgb(var(--warning-fixed-dark) / <alpha-value>)",
            darker: "rgb(var(--warning-fixed-darker) / <alpha-value>)",
            darkest: "rgb(var(--warning-fixed-darkest) / <alpha-value>)",
            },
        },
        danger: {
          DEFAULT: "rgb(var(--danger) / <alpha-value>)",
          container: "rgb(var(--danger-container) / <alpha-value>)",          
          higher: "rgb(var(--danger-higher) / <alpha-value>)",
          high: "rgb(var(--danger-high) / <alpha-value>)",
          mid: "rgb(var(--danger-mid) / <alpha-value>)",
          low: "rgb(var(--danger-low) / <alpha-value>)",
          lower: "rgb(var(--danger-lower) / <alpha-value>)",
          fixed: {
            dim: "rgb(var(--danger-fixed-dim) / <alpha-value>)",
            DEFAULT: "rgb(var(--danger-fixed) / <alpha-value>)",
            dark: "rgb(var(--danger-fixed-dark) / <alpha-value>)",
            darker: "rgb(var(--danger-fixed-darker) / <alpha-value>)",
            darkest: "rgb(var(--danger-fixed-darkest) / <alpha-value>)",
            },
        },

        on: {
          background: "rgb(var(--on-background) / <alpha-value>)",
          surface: {
            DEFAULT: "rgb(var(--on-surface) / <alpha-value>)",
            variant: "rgb(var(--on-surface-variant) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "rgb(var(--on-primary) / <alpha-value>)",
            container: "rgb(var(--on-primary-container) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "rgb(var(--on-secondary) / <alpha-value>)",
            container: "rgb(var(--on-secondary-container) / <alpha-value>)",
          },
          tertiary: {
            DEFAULT: "rgb(var(--on-tertiary) / <alpha-value>)",
            container: "rgb(var(--on-tertiary-container) / <alpha-value>)",
          },
          success: {
            DEFAULT: "rgb(var(--on-success) / <alpha-value>)",
            container: "rgb(var(--on-success-container) / <alpha-value>)",
          },
          info: {
            DEFAULT: "rgb(var(--on-info) / <alpha-value>)",
            container: "rgb(var(--on-info-container) / <alpha-value>)",
          },
          warning: {
            DEFAULT: "rgb(var(--on-warning) / <alpha-value>)",
            container: "rgb(var(--on-warning-container) / <alpha-value>)",
          },
          danger: {
            DEFAULT: "rgb(var(--on-danger) / <alpha-value>)",
            container: "rgb(var(--on-danger-container) / <alpha-value>)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
