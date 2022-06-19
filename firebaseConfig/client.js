import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { USER_STATES } from "hooks/useUser"

const firebaseConfig = {
  apiKey: "AIzaSyDPmJ95FOIf1QExdxPG6Z5RjvBsrKj3K4I",
  authDomain: "devter-4e4df.firebaseapp.com",
  projectId: "devter-4e4df",
  storageBucket: "devter-4e4df.appspot.com",
  messagingSenderId: "99122454790",
  appId: "1:99122454790:web:06c59e73082a24941f3e87",
  measurementId: "G-BHS2P297FE",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    userName: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user
      ? mapUserFromFirebaseAuth(user)
      : USER_STATES.NOT_LOGGED
    onChange(normalizeUser)
  })
}

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider)
}

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection("devits").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLatestDevits = () => {
  return db
    .collection("devits")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        const intl = new Intl.DateTimeFormat("es-ES")
        const normalizedCreatedAt = intl.format(createdAt.toDate())

        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt,
        }
      })
    })
}
