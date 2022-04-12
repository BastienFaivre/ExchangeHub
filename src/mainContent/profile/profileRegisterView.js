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
    return (
        <Card
            variant="outlined"
            sx={{
                width: "500px",
                textAlign: "center",
                margin: "auto",
            }}
        >
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <AccountCircleIcon fontSize="large" />
                    <Typography variant="h5">Create an account</Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        required
                    />
                    <Button variant="contained">Register</Button>
                    <Typography variant="body1">
                        Already signed up? <Link to={`/login`}>Login</Link>
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
