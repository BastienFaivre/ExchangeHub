import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: "#B51F1F",
        },
        secondary: {
            main: "#44BBAE",
        },
    },
    components: {
        MuiTab: {
            variants: [
                {
                    props: { variant: "sidebar" },
                    style: {
                        color: "#B51F1F",
                    },
                },
            ],
        },
    },
})

export default theme
