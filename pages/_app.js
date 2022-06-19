import AppLayout from "components/AppLayout"

export default function DevterApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
