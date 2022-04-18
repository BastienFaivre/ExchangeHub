import { Button } from "@mui/material"

export default function ProfileView(props) {
    function logoutACB(event) {
        event.preventDefault()
        props.logout()
    }

    return (
        <>
            <Button onClick={logoutACB}>Logout</Button>
        </>
    )
}
