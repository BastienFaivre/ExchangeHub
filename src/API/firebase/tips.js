import {
    collection,
    addDoc,
    doc,
    setDoc,
    getFirestore,
    query,
    where,
    getDocs,
    limit,
    updateDoc,
} from "firebase/firestore"

import { getAuth } from "firebase/auth"

export async function getTipsByStudentId() {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        const q = query(collection(db, "tips"), where("userId", "==", userId))
        const snapshot = await getDocs(q)
        const tips = snapshot.docs.map((doc) => doc.data())
        return tips
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function saveTip(tip) {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }

        await addDoc(collection(db, "tips"), { ...tip, userId })
    } catch (e) {
        console.error(e.message)
        throw e
    }
}
