import 'artemis/styles/globals.css'

import Layout from 'artemis/components/Layout'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // if need to login, redirect here
  }, [])

  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  )
}
