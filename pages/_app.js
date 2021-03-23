import '../styles/globals.css'
import '../styles/extras.css'
import feather from 'feather-icons'
import { useEffect } from 'react'
import NextHead from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    feather.replace()
  }, [])
  return (
    <>
      <NextHead>
        <title>TillWhen v1.0.0</title>
      </NextHead>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
