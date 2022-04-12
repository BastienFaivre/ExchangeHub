import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import { Link } from "react-router-dom"

export default function SidebarView({ currentTab }) {
    return (
        <Tabs
            value={currentTab}
            orientation="vertical"
            textColor="primary"
            indicatorColor="primary"
            aria-label="links to other pages"
        >
            <Tab
                label="Courses"
                value={"/courses" || "/courses/:id"}
                to="/courses"
                variant="sidebar"
                component={Link}
            />
            <Tab
                label="Lifestyle"
                value="/lifestyle"
                to="/lifestyle"
                variant="sidebar"
                component={Link}
            />
            <Tab
                label="Students"
                value="/students"
                to="/students"
                variant="sidebar"
                component={Link}
            />
        </Tabs>
    )
}
