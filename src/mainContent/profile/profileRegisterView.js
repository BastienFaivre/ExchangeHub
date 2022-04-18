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

export default function ProfileRegisterView(props) {
    function handleEmailChangeACB(event) {
        props.setEmail(event.target.value)
    }

    function handlePasswordChangeACB(event) {
        props.setPassword(event.target.value)
    }

    function handleConfirmPasswordChangeACB(event) {
        props.setConfirmPassword(event.target.value)
    }

    function registerACB(event) {
        event.preventDefault()
        props.register()
    }

    return (
        <Card
            variant="outlined"
            sx={{
                width: "500px",
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
                    <Typography variant="h5">Create an account</Typography>
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
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        value={props.confirmPassword}
                        onChange={handleConfirmPasswordChangeACB}
                        required
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={registerACB}
                    >
                        Register
                    </Button>
                    <Typography variant="body1">
                        Already signed up? <Link to={`/login`}>Login</Link>
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
