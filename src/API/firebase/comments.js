import {
    collection,
    addDoc,
    getFirestore,
    query,
    where,
    getDocs,
} from "firebase/firestore"

import { getAuth } from "firebase/auth"

export async function getCommentsByStudentId() {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        const q = query(
            collection(db, "comments"),
            where("userId", "==", userId)
        )
        const snapshot = await getDocs(q)
        const comments = snapshot.docs.map((doc) => doc.data())
        return comments
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function saveComment(comment) {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }

        await addDoc(collection(db, "comments"), { ...comment, userId })
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function getCommentsByCourseCode(courseCode) {
    try {
        const db = getFirestore()
        const q = query(
            collection(db, "comments"),
            where("courseCode", "==", courseCode)
        )

        const snapshot = await getDocs(q)
        const comments = snapshot.docs.map((doc) => doc.data())
        return comments
    } catch (e) {
        console.error(e.message)
    }
}
