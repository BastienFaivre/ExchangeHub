import { makeStyles } from "@mui/styles"

const styles = (theme) => {
    return {
        toolBar: {
            height: "10vh",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            backgroundColor: "white",
        },
        logo: {
            color: "blue",
            cursor: "pointer",
        },
        link: {
            color: "#000",
        },
        menuIcon: {
            color: "#000",
        },
        formContainer: {
            flexGrow: 1,
            padding: "10px",
            maxWidth: "700px",
            margin: "30px auto",
            [theme.breakpoints.between("xs", "sm")]: {
                width: "100%",
            },
        },
        form: {
            marginTop: "30px",
        },
        formHeading: {
            textAlign: "center",
        },
        heroBox: {
            width: "100%",
            display: "flex",
            minHeight: "600px",
            alignItems: "center",
            justifyContent: "center",
        },
        gridContainer: {
            display: "flex",
            alignItems: "center",
            maxWidth: "1300px",
            padding: "50px",
        },
        title: {
            paddingBottom: "15px",
        },
        subtitle: {
            opacity: "0.4",
            paddingBottom: "30px",
        },
        largeImage: {
            width: "100%",
        },
    }
}

const useStyles = makeStyles(styles)
export default useStyles
