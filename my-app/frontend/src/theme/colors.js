import {alpha} from '@mui/material/styles';

const withAlphas = (color) => {
    return {
        ...color,
        alpha4: alpha(color.main, 0.04),
        alpha8: alpha(color.main, 0.08),
        alpha12: alpha(color.main, 0.12),
        alpha30: alpha(color.main, 0.30),
        alpha50: alpha(color.main, 0.50)
    };
};

export const neutral = {
    50: '#F8F9FA',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D2D6DB',
    400: '#9DA4AE',
    500: '#6C737F',
    600: '#4D5761',
    700: '#2F3746',
    800: '#1C2536',
    900: '#111927'
};

export const indigo = withAlphas({
    lightest: '#F5F7FF',
    light: '#EBEEFE',
    main: '#6366F1',
    dark: '#4338CA',
    darkest: '#312E81',
    contrastText: '#FFFFFF'
});

export const success = withAlphas({
    lightest: '#F0FDF9',
    light: '#3FC79A',
    main: '#10B981',
    dark: '#0B815A',
    darkest: '#134E48',
    contrastText: '#FFFFFF'
});

export const info = withAlphas({
    lightest: '#ECFDFF',
    light: '#CFF9FE',
    main: '#06AED4',
    dark: '#0E7090',
    darkest: '#164C63',
    contrastText: '#FFFFFF'
});

export const warning = withAlphas({
    lightest: '#FFFAEB',
    light: '#FEF0C7',
    main: '#F79009',
    dark: '#B54708',
    darkest: '#7A2E0E',
    contrastText: '#FFFFFF'
});

export const beige = withAlphas({
    lightest: '#FFFDF6',
    light: '#FAF7EC',
    main: '#C69C6D',
    dark: '#8C6E47',
    darkest: '#634C32',
    contrastText: '#000000'
});
export const teal = {
    lightest: '#E0F2F1',
    light: '#80CBC4',
    main: '#009688',
    dark: '#00796B',
    darkest: '#004D40',
    contrastText: '#FFFFFF'
};

export const black = withAlphas({
    lightest: '#F2F2F2',
    light: '#CCCCCC',
    main: '#000000',
    dark: '#666666',
    darkest: '#333333',
    contrastText: '#FFFFFF'
});

export const error = withAlphas({
    lightest: '#FEF3F2',
    light: '#FEE4E2',
    main: '#F04438',
    dark: '#B42318',
    darkest: '#7A271A',
    contrastText: '#FFFFFF'
});

