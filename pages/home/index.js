import Devit from "components/Devit"
import Create from "components/Icons/Create"
import Home from "components/Icons/Home"
import Search from "components/Icons/Search"
import { fetchLatestDevits } from "firebaseConfig/client"
import useUser from "hooks/useUser"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { colors } from "styles/theme"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline)
  }, [user])

  return (
    <>
      <Head>
        <title>Inicio / Devter</title>
      </Head>
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeline.map(
          ({ id, userName, avatar, content, userId, createdAt, img }) => {
            return (
              <Devit
                key={id}
                createdAt={createdAt}
                userName={userName}
                avatar={avatar}
                content={content}
                id={id}
                userId={userId}
                img={img}
              />
            )
          }
        )}
      </section>
      <nav>
        <Link href={"/home"}>
          <a>
            <Home width={32} height={32} stroke="#09f" />
          </a>
        </Link>

        <Link href={"/search"}>
          <a>
            <Search width={32} height={32} stroke="#09f" />
          </a>
        </Link>

        <Link href={"/compose/devit"}>
          <a>
            <Create width={32} height={32} stroke="#09f" />
          </a>
        </Link>
      </nav>
      <style jsx>{`
        header {
          align-items: center;
          background: #ffffffaa;
          back-drop-filter: blur(5px);
          border-bottom: 1px solid #eee;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        section {
          flex: 1;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          display: flex;
          width: 100%;
        }

        nav a {
          display: flex;
          flex: 1 1 auto;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }

        nav a:hover > :global(svg) {
          stroke: ${colors.primary};
        }
      `}</style>
    </>
  )
}
