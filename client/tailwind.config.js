module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                // '3xl': '1650px',
                '3xl': { 'max': '1635px' },
            },
        },
        extend: {
            inset: {
                '600': '30.6rem',
            }
        },
        extend: {
            margin: {
                'top': '14.55',
            },
        },
        extend: {
            colors: {
                //Purple
                jacksonsGray: "#F9FAFB",
                //Red
                radicalRed: "#FF3C69",
                pippin: "#ffe6e9",
                //White
                white: "#FFFFFF",
                //grey
                grey: "#6B7280",
                gallery: "#E5E7EB",
                gray94: "#374151",
                gray95: "#6B7280",
                alto: "#D1D5DB",
                darkgray: "#a9a9a9",
                lightGray: '#4B5563',
                //black
                mineShaft: "#222222",
                black: "#000000",
                //blue
                indigo: "#4F46E5",
                transparent: 'transparent',
                red: '#f7022a',
                redish: '#EE4646',
                green: '#059669',
                yellow: '#FAAB60',
                indigo700: '#4338CA',
                indigo600: '#4F46E5',
                indigo500: '#6366F1',
                indigo400: '#818CF8',
                red600: '#DC2626',
                green500: '#10B981',
                greenish: '#5DEFC3',
                yellowish: '#EEA146',
                lightindigo: '#E0E7FF',
                radicalpinkish: '#f06283',


                gray900: '#111827',
                gray50: '#FAFAFA',
                gray300: '#D4D4D8',
                grayshade: '#F9F9F9',

                indigo100: '#E0E7FF',

                bordercolor: '#D1D5DB',
                rightbackgroundcolor: '#F3F4F6',
                lightrightbackgroundcolor: '#f5f8ff',
                svgcolor: '#C4C4C4',
                fuschia: "#EF5DA8",
                bluish: "#818CF8",
                canvasbgcolor: "#F9FAFB",
                deletebutton: "#FEE2E2",
                deletebuttontext: "#B91C1C",
                createEmail: "#4B5563",
                createEmail2: "#D1D5DB",
                SolidColor: "#6366F1",
                gradientColor: "#374151",
                elementColor: "#4B5563",
                deletecolor: "#FEE2E2"

            }
        }


    },

    variants: {
        extend: {
            fontWeight: ['hover', 'focus'],
            backgroundColor: ['active'],
            display: ['group-hover']
        },

    },
    plugins: [
        require('tailwindcss-font-inter')()

    ],
}
