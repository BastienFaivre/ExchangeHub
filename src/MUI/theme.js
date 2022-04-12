import { createTheme } from "@mui/material/styles"
import { grey } from "@mui/material/colors"

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

// Example custom theme
// const theme = createTheme({
// 	palette: {
// 		type: "light",
// 		primary: {
// 			main: "#1a237e",
// 		},
// 		secondary: {
// 			main: "#d81b60",
// 		},
// 	},
// })

// Feel free to change theme with theme generator on https://bareynol.github.io/mui-theme-creator/

export default theme
