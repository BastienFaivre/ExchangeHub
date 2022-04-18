import ProfileRegisterView from "./profileRegisterView"
import { useState } from "react"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

export default function ProfileRegisterPresenter() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function emailChangedACB(newEmail) {
        setEmail(newEmail)
    }

    function passwordChangedACB(newPassword) {
        setPassword(newPassword)
    }

    function confirmPasswordChangedACB(newConfirmedPassword) {
        setConfirmPassword(newConfirmedPassword)
    }

    function registerACB() {
        if (password === confirmPassword && email.match(/.+@.+/)) {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, email, password)
        }
    }

    return (
        <ProfileRegisterView
            email={email}
            password={password}
            confirmedPassword={confirmPassword}
            setEmail={emailChangedACB}
            setPassword={passwordChangedACB}
            setConfirmPassword={confirmPasswordChangedACB}
            register={registerACB}
        />
    )
}
