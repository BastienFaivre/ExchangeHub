import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import CircularProgress from "@mui/material/CircularProgress"

export default function LoadingErrorHandler({
    loading,
    error,
    errorMessage = "Error",
    children,
}) {
    if (loading) {
        return (
            <Box sx={{ width: "fit-content", mx: "auto", padding: "20px" }}>
                <CircularProgress color="primary" m="auto" />
            </Box>
        )
    }

    if (error) {
        return (
            <Typography
                variant="h5"
                sx={{ padding: "20px", textAlign: "center" }}
            >
                {errorMessage}
            </Typography>
        )
    }

    return children
}
