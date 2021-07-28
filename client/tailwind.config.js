module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
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
            indigo600: '#4F46E5',
            red600: '#DC2626',
            green500: '#10B981',
            greenish: '#5DEFC3',
            yellowish: '#EEA146',
            lightindigo: '#E0E7FF',
            radicalpinkish: '#f06283',


            gray900: '#111827',
            grayshade: '#F9F9F9',

            indigo100: '#E0E7FF',

            bordercolor: '#D1D5DB',
            rightbackgroundcolor: '#F3F4F6',
            svgcolor: '#C4C4C4',
            fuschia: "#EF5DA8",
            bluish: "#818CF8"
        },


    },
    variants: {
        extend: {
            fontWeight: ['hover', 'focus'],
        },
    },
    plugins: [
        require('tailwindcss-font-inter')()

    ],
}
