import ProfileLoginView from "./profileLoginView"
import { useState } from "react"
import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    getAuth,
    setPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth"

export default function ProfileLoginPresenter() {
    const [registered, setRegistered] = useState(true)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState(null)

    function emailChangedACB(newEmail) {
        setEmail(newEmail)
    }

    function passwordChangedACB(newPassword) {
        setPassword(newPassword)
    }

    function loginACB() {
        const auth = getAuth()
        if (registered) {
            setPersistence(auth, browserLocalPersistence)
                .then(function signInACB() {
                    return signInWithEmailAndPassword(auth, email, password)
                })
                .catch(setError)
        } else {
            setPersistence(auth, browserLocalPersistence)
                .then(function createUserACB() {
                    return createUserWithEmailAndPassword(auth, email, password)
                })
                .catch(setError)
        }
    }
    return (
        <ProfileLoginView
            registered={registered}
            email={email}
            password={password}
            setRegistered={setRegistered}
            setEmail={emailChangedACB}
            setPassword={passwordChangedACB}
            login={loginACB}
            error={error}
        />
    )
}
