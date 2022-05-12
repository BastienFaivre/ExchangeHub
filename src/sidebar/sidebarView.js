import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import { Link } from "react-router-dom"

const TabData = [
    { label: "Courses", value: "/courses" || "/courses/:id", to: "/courses" },
    { label: "Lifestyle", value: "/lifestyle", to: "/lifestyle" },
    {
        label: "Students",
        value: "/students" || "/students/:id",
        to: "/students",
    },
]

export default function SidebarView({ currentTab }) {
    return (
        <Tabs
            value={currentTab}
            orientation="vertical"
            textColor="primary"
            indicatorColor="primary"
            aria-label="links to other pages"
        >
            {TabData.map(({ label, value, to }) => {
                return (
                    <Tab
                        key={label}
                        label={label}
                        value={value}
                        to={to}
                        variant={
                            currentTab === value ? "selectedSidebar" : "sidebar"
                        }
                        component={Link}
                    />
                )
            })}
        </Tabs>
    )
}
