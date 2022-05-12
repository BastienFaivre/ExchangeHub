import NavigationView from "./navigationView"

import { useLocation } from "react-router-dom"

export default function NavigationPresenter() {
    const { pathname } = useLocation()

    const isProfile = pathname === "/profile"

    console.log(isProfile)
    return <NavigationView isProfile={isProfile} />
}
