import ProfileLoginView from "./profileLoginView"
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default function ProfileLoginPresenter() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function emailChangedACB(newEmail) {
        setEmail(newEmail)
    }

    function passwordChangedACB(newPassword) {
        setPassword(newPassword)
    }

    function loginACB() {
        if (email.match(/.+@.+/)) {
            const auth = getAuth()
            signInWithEmailAndPassword(auth, email, password).then(console.log).catch(console.log)
        }
    }
    return (
        <ProfileLoginView
            email={email}
            password={password}
            setEmail={emailChangedACB}
            setPassword={passwordChangedACB}
            login={loginACB}
        />
    )
}
