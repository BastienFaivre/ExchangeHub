import {
    collection,
    doc,
    setDoc,
    getFirestore,
    query,
    where,
    getDocs,
    updateDoc,
    getDoc,
} from "firebase/firestore"

import { getAuth } from "firebase/auth"

export async function getStudentProfile() {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        const studentDocRef = doc(db, "students", userId)
        const snapshot = await getDoc(studentDocRef)
        const studentInfo = snapshot.data()
        if (!studentInfo) {
            return undefined
        }
        const { form, info } = studentInfo
        return { form, info }
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function createUserProfile(userData) {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        await setDoc(doc(db, "students", `${userId}`), userData)
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function updateUserInfo(newInfo) {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        const studentDocRef = doc(db, "students", userId)
        await updateDoc(studentDocRef, { info: newInfo })
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function getUser(userId) {
    try {
        const db = getFirestore()
        const snapshot = await getDoc(doc(db, "students", userId))
        const user = snapshot.data()
        return user
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function getUsersByNationalityAndUniversityAndDepartment(
    nationality,
    university,
    department
) {
    try {
        const db = getFirestore()
        let q
        if (!nationality && !university && !department) {
            q = query(collection(db, "students"))
        } else if (nationality && !university && !department) {
            q = query(
                collection(db, "students"),
                where("info.nationality", "==", nationality)
            )
        } else if (!nationality && university && !department) {
            q = query(
                collection(db, "students"),
                where("info.university", "==", university)
            )
        } else if (!nationality && !university && department) {
            q = query(
                collection(db, "students"),
                where("info.department", "==", department)
            )
        } else if (nationality && university && !department) {
            q = query(
                collection(db, "students"),
                where("info.nationality", "==", nationality),
                where("info.university", "==", university)
            )
        } else if (nationality && !university && department) {
            q = query(
                collection(db, "students"),
                where("info.nationality", "==", nationality),
                where("info.department", "==", department)
            )
        } else if (!nationality && university && department) {
            q = query(
                collection(db, "students"),
                where("info.university", "==", university),
                where("info.department", "==", department)
            )
        } else if (nationality && university && department) {
            q = query(
                collection(db, "students"),
                where("info.nationality", "==", nationality),
                where("info.university", "==", university),
                where("info.department", "==", department)
            )
        }

        const snapshot = await getDocs(q)
        const users = snapshot.docs.map((doc) => ({
            data: doc.data(),
            userId: doc.id,
        }))
        return users
    } catch (e) {
        console.error(e.message)
        throw e
    }
}

export async function getUsers() {
    try {
        const db = getFirestore()
        const snapshot = await getDocs(collection(db, "students"))
        const users = snapshot.docs.map((doc) => ({
            data: doc.data(),
            userId: doc.id,
        }))
        return users
    } catch (e) {
        console.error(e.message)
        throw e
    }
}
