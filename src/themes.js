import { createTheme } from "@mui/material";

export const dark = createTheme({
    palette: {
        mode: "dark",
        text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)"
        },
        primary: {
            main: '#00aaff',
            contrastText: "#fff"
        },
        action: {
            active: "#fff",
            hover: "rgba(255, 255, 255, 0.08)",
            selected: "rgba(255, 255, 255, 0.16)",
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)"
        },
        background: {
            paper: "rgb(40, 40, 40)",
            default: "rgb(40, 40, 40)"
        },
        divider: "rgba(255, 255, 255, 0.12)",

        //custom stuff
        cardColor: "rgb(50, 50, 50)",
        cardBorder: "rgb(45, 45, 45)"
    }
});

export const light = createTheme({
    palette: {
        mode: "light",
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)"
        },
        primary: {
            main: '#00aaff',
            contrastText: "#fff"
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            selected: "rgba(0, 0, 0, 0.08)",
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)"
        },
        background: {
            paper: "rgb(255, 255, 255)",
            default: "rgb(255, 255, 255)"
        },
        divider: "rgba(255, 255, 255, 0.12)",

        //custom stuff
        cardColor: "rgb(245, 245, 245)",
        cardBorder: "rgb(240, 240, 240)"
    }
});