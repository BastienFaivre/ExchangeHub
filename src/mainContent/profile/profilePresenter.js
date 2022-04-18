import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import ProfileView from "./profileView"

export default function ProfilePresenter() {
    function logoutACB() {
        const auth = getAuth()
        signOut(auth).catch(console.log)
    }

    return <ProfileView logout={logoutACB} />
}
