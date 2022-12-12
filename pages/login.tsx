import React from 'react'

import Image from 'next/image'
import LogoIcon from 'artemis/public/Logo.svg'

const Login = () => {
	return (
		<main className='container mx-auto px-4 pt-2'>
			<section className='items-center space-x-4 rounded-xl bg-white p-6 shadow-md'>
				<LogoIcon />
				<h1 className='color-primary text-ellipsis text-2xl font-black capitalize leading-relaxed tracking-wide text-primary'>
					{/* before:content-['↖_'] after:content-['_↗'] */}
					Artemis
				</h1>
			</section>
		</main>
	)
}

export default Login
