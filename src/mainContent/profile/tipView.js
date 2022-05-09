import { PropaneSharp } from "@mui/icons-material"
import { CardContent, Card, CardHeader } from "@mui/material"
import styles from "../../MUI/styles/styles"

export default function ProfileTipsView(props) {
    function tipCB(tip) {
        function editTipACB(event) {
            event.preventDefault()
            props.editTip(tip.id)
        }

        function deleteTipACB(event) {
            event.preventDefault()
            props.deleteTip(tip.id)
        }
    }
    return (
        <CardContent>
            <Card
                variant="oulined"
                style={{ padding: "30px" }}
                sx={{ width: "100%", p: 2 }}
            >
                <CardHeader title="My tips" />
            </Card>
        </CardContent>
    )
}
