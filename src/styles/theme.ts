import { extendTheme } from 'native-base';

export const THEME = extendTheme({
    colors: {
        primary: {
            500: '#f9dbe1',
            400: '#f3b8c3',
            300: '#ed95a5',
            200: '#e77287',
            100: '#e24f69',
        },
        secondary: {
            500: '#b9daf3',
            400: '#a3ceef',
            300: '#8dc2eb',
            200: '#78b7e7',
            100: '#62abe4',
        },
        white: '#FFFFFF'
    },
    fonts: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
        medium: 'Roboto_500Medium'
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
    },
    sizes: {
        14: 56
    }
});