import 'artemis/styles/globals.css'

import Layout from 'artemis/components/Layout'

import type { AppProps } from 'next/app'
import { Suspense, useEffect } from 'react'
import { Provider } from 'jotai'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// if need to login, redirect here
	}, [])

	return (
		<Provider>
			<Suspense fallback='Loading...'>
				<Layout />
				<Component {...pageProps} />
			</Suspense>
		</Provider>
	)
}
