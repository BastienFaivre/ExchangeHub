import {
    Button,
    Card,
    CardContent,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Link } from "react-router-dom"

export default function ProfileLoginView(props) {
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
                    <Typography variant="h5">Login</Typography>
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
                    <Button variant="contained" type="submit" onClick={loginACB}>
                        Login
                    </Button>
                    <Typography variant="body1">
                        Don't have an account?{" "}
                        <Link to={`/register`}>Register</Link>
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
