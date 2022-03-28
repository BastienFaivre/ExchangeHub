import { createTheme } from "@mui/material/styles"
import { blue, red } from "@mui/material/colors"

const theme = createTheme((theme) => ({
	components: {
		MuiTab: {
			variants: [
				{
					props: { variant: "sidebar" },
					style: {
						textTransform: "none",
						border: `2px dashed ${blue[500]}`,
					},
				},
				{
					props: { variant: "dashed", color: "secondary" },
					style: {
						border: `4px dashed ${red[500]}`,
					},
				},
			],
		},
	},
}))

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
