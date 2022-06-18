import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDPmJ95FOIf1QExdxPG6Z5RjvBsrKj3K4I",
  authDomain: "devter-4e4df.firebaseapp.com",
  projectId: "devter-4e4df",
  storageBucket: "devter-4e4df.appspot.com",
  messagingSenderId: "99122454790",
  appId: "1:99122454790:web:06c59e73082a24941f3e87",
  measurementId: "G-BHS2P297FE",
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = mapUserFromFirebaseAuth(user)
    onChange(normalizeUser)
  })
}

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider)
}
