import {
    collection,
    addDoc,
    getFirestore,
    query,
    where,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore"

import { getAuth } from "firebase/auth"

export async function getCommentsForProfile() {
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
        const comments = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        return comments
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function getCommentsByStudentId(userId) {
    try {
        const db = getFirestore()
        const q = query(
            collection(db, "comments"),
            where("userId", "==", userId)
        )
        const snapshot = await getDocs(q)

        const comments = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        return comments
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function updateComment(newComment) {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        const { id, ...comment } = newComment
        const commentRef = doc(db, `comments/${id}`)
        await updateDoc(commentRef, comment)
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

        const { id } = await addDoc(collection(db, "comments"), {
            ...comment,
            userId,
        })
        return id
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function removeComment(commentId) {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        const commentRef = doc(db, `comments/${commentId}`)
        await deleteDoc(commentRef)
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
