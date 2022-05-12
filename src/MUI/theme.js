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
                {
                    props: { variant: "selectedSidebar" },
                    style: {
                        color: "#B51F1F",
                        backgroundColor: "#F5F5F5",
                    },
                },
            ],
        },
    },
})

export default theme
