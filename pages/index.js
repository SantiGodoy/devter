import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import AppLayout from "../components/AppLayout"
import Button from "../components/Button"
import GitHub from "../components/Icons/github"
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client"
import { colors } from "../styles/theme"

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGitHub()
      .then(setUser)
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Head>
        <title>devter 🐤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <Image src="/devter-logo.png" alt="Logo" width={120} height={120} />
          <h1 href="https://nextjs.org">devter</h1>
          <h2>
            Talk about development
            <br />
            with developers 👨‍💻👩‍💻
          </h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub fill={colors.white} width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <Image
                  src={user.avatar}
                  alt="avatar"
                  width={120}
                  height={120}
                />
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }
        div {
          margin-top: 16px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
