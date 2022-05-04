import {
    collection,
    doc,
    setDoc,
    getFirestore,
    query,
    where,
    getDocs,
    limit,
    updateDoc,
    getDoc,
} from "firebase/firestore"

import { getAuth } from "firebase/auth"

export async function createUserProfile(userData) {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        console.log("SAVING USER", userData)
        await setDoc(doc(db, "students", `${userId}`), userData)
    } catch (e) {
        console.error(e.message)
    }
}

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

export async function updateUserForm(newForm) {
    try {
        const db = getFirestore()
        const auth = getAuth()
        const userId = auth?.currentUser?.uid ?? false
        if (!userId) {
            throw new Error("User needs to be logged in")
        }
        const studentDocRef = doc(db, "students", userId)
        await updateDoc(studentDocRef, { form: newForm })
    } catch (e) {
        console.error(e.message)
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
    }
}

export async function getUsersWithLimit(lim = 2) {
    try {
        const db = getFirestore()
        const q = query(collection(db, "students"), limit(lim))
        const snapshot = await getDocs(q)
        const users = snapshot.docs.map((doc) => doc.data())
        return users
    } catch (e) {
        console.error(e.message)
    }
}

export async function getUsersByNationality(nationality) {
    try {
        const db = getFirestore()
        const q = query(
            collection(db, "students"),
            where("info.nationality", "==", nationality)
        )

        const snapshot = await getDocs(q)
        const users = snapshot.docs.map((doc) => ({
            data: doc.data(),
            userId: doc.id,
        }))
        return users
    } catch (e) {
        console.error(e.message)
    }
}

export async function getUsersByDepartment(department) {
    try {
        const db = getFirestore()
        const q = query(
            collection(db, "students"),
            where("info.department", "==", department)
        )

        const snapshot = await getDocs(q)
        const users = snapshot.docs.map((doc) => ({
            data: doc.data(),
            userId: doc.id,
        }))
        return users
    } catch (e) {
        console.error(e.message)
    }
}

export async function getUsersByNationalityAndDepartment(
    nationality,
    department
) {
    try {
        const db = getFirestore()
        const q = query(
            collection(db, "students"),
            where("info.nationality", "==", nationality),
            where("info.department", "==", department)
        )

        const snapshot = await getDocs(q)
        const users = snapshot.docs.map((doc) => ({
            data: doc.data(),
            userId: doc.id,
        }))
        return users
    } catch (e) {
        console.error(e.message)
    }
}
