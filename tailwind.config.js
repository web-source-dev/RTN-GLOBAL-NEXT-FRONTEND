/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
        serif: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
                      css: {
              color: 'hsl(var(--foreground))',
              fontFamily: 'var(--font-roboto), Roboto, system-ui, sans-serif',
              h1: {
                fontFamily: 'var(--font-poppins), Poppins, system-ui, sans-serif',
                color: 'hsl(var(--foreground))',
                fontWeight: '700',
              },
              h2: {
                fontFamily: 'var(--font-poppins), Poppins, system-ui, sans-serif',
                color: 'hsl(var(--foreground))',
                fontWeight: '600',
              },
              h3: {
                fontFamily: 'var(--font-poppins), Poppins, system-ui, sans-serif',
                color: 'hsl(var(--foreground))',
                fontWeight: '600',
              },
              h4: {
                fontFamily: 'var(--font-poppins), Poppins, system-ui, sans-serif',
                color: 'hsl(var(--foreground))',
                fontWeight: '600',
              },
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary))',
              },
            },
            blockquote: {
              color: 'hsl(var(--muted-foreground))',
              borderLeftColor: 'hsl(var(--border))',
            },
            strong: {
              color: 'hsl(var(--foreground))',
            },
                          code: {
                fontFamily: 'JetBrains Mono, monospace',
                color: 'hsl(var(--foreground))',
                backgroundColor: 'hsl(var(--muted))',
                borderRadius: '0.25rem',
                padding: '0.15rem 0.3rem',
              },
              pre: {
                fontFamily: 'JetBrains Mono, monospace',
                backgroundColor: 'hsl(var(--muted))',
                code: {
                  backgroundColor: 'transparent',
                  color: 'currentColor',
                  padding: '0',
                },
              },
            hr: {
              borderColor: 'hsl(var(--border))',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} 