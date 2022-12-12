import Image from 'next/image'
import { useAtom } from 'jotai'
import { useMediaQuery } from 'artemis/hooks'
import Haibara from 'artemis/public/images/haibara.jpg'
import { LG, MD, MUSIC_QUALTITY, SM, XL, XXL } from 'artemis/common/consts'
import { rwPlaylistAtom } from 'artemis/models/MusicModel'
import { useState } from 'react'
import { getMusicUrlById, searchByKeyword } from '../services/CommonService'
import { Song } from 'artemis/interfaces'

export default function Home() {
	const isSM = useMediaQuery(SM)
	const isMD = useMediaQuery(MD)
	const isLG = useMediaQuery(LG)
	const isXL = useMediaQuery(XL)
	const isXXL = useMediaQuery(XXL)

	const [playlist, setPlaylist] = useAtom(rwPlaylistAtom)
	const [keywords, setKeywords] = useState('')

	console.log('playlist', playlist)

	return (
		<>
			<main>
				<header className='flex flex-col items-center p-6 sm:flex-row'>
					<Image src={Haibara} className='h-12 w-12 rounded-xl' alt={'baibara'} />
					<h1 className='pt-4 align-middle text-3xl font-bold leading-none text-primary sm:pl-4'>
						{`Haibara Ai`}
					</h1>
				</header>
				<section className='m-10 flex items-center space-x-4 rounded-xl border-2 border-slate-400 bg-white p-6 shadow-md'>
					<input
						className='border-2'
						type='text'
						value={keywords}
						onChange={(e) => setKeywords(e.target.value)}
					/>
					<button
						className='border-2'
						onClick={() => {
							setPlaylist(searchByKeyword(keywords))
						}}>{`search with ${keywords}`}</button>
				</section>

				<section className='flex max-w-full items-center space-x-4 rounded-xl bg-white p-6 shadow-md'>
					<table className='w-full table-fixed'>
						<thead>
							<tr className='flex w-full justify-around'>
								<th>Song</th>
								<th>Artist</th>
								<th>Alia</th>
								<th>Duration</th>
							</tr>
						</thead>
						<tbody>
							{playlist.map((song: Song) => (
								<tr
									key={song.id}
									onClick={
										async () => {
											const res = await getMusicUrlById(
												[song.id],
												MUSIC_QUALTITY.HIRES
											)
											if (!!res) {
												window.location.href = res
											}
										}
										// (window.location.href = '/')
									}>
									<td>{song.name}</td>
									<td>{song.artist[0].name}</td>
									<td>{!!song.aliaList.length && song.aliaList[0]}</td>
									<td>{song.datetime}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			</main>
			<footer className='text-center'>
				<span className='text-red-500'>{`screen size: ${
					isSM
						? 'small'
						: isMD
						? 'middle'
						: isLG
						? 'large'
						: isXL
						? 'extra large'
						: isXXL
						? '2extra large'
						: 'more than 2extra large'
				}`}</span>
			</footer>
		</>
	)
}
