import { Box, Typography } from "@mui/material"
import styles from "../../MUI/styles/styles"

export default function FormTipsView(props) {
    return (
        <Box className={styles.formContainer}>
            <Typography variant="h4" className={styles.formHeading}>
                Add a tip
            </Typography>
        </Box>
    )
}
