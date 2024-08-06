import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#969696',
        },
        secondary: {
            main: '#ff7043',
        },
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#969696',
        },
        secondary: {
            main: '#ff7043',
        },
    }
});

export { lightTheme, darkTheme };