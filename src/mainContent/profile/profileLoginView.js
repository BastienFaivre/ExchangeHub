import {
    Button,
    Card,
    CardContent,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

export default function ProfileLoginView(props) {
    function changeFormStateACB(event) {
        event.preventDefault()
        props.changeFormState()
    }

    function handleEmailChangeACB(event) {
        props.setEmail(event.target.value)
    }

    function handlePasswordChangeACB(event) {
        props.setPassword(event.target.value)
    }

    function loginACB(event) {
        event.preventDefault()
        props.login()
    }

    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: "500px",
                width: "30%",
                textAlign: "center",
                margin: "auto",
                marginTop: "10%",
            }}
        >
            <CardContent>
                <Stack direction="column" spacing={2} component="form">
                    <AccountCircleIcon
                        fontSize="large"
                        sx={{ alignSelf: "center" }}
                    />
                    <Typography variant="h5">
                        {props.registered ? "Login" : "Register"}
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={props.email}
                        onChange={handleEmailChangeACB}
                        required
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={props.password}
                        onChange={handlePasswordChangeACB}
                        required
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={loginACB}
                    >
                        {props.registered ? "Login" : "Register"}
                    </Button>
                    {props.error && (
                        <Typography variant="body1" color="error">
                            {props.error.message}
                        </Typography>
                    )}
                    <Typography variant="body1">
                        {props.registered
                            ? "Don't have an account ? "
                            : "Already have an account ? "}
                        <a href="" onClick={changeFormStateACB}>
                            {props.registered ? "Register" : "Login"}
                        </a>
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
