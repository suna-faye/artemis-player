import { atom } from 'jotai'
import { searchByKeyword } from 'artemis/services/CommonService'

export const playlistAtom = atom<any[]>([])

export const rwPlaylistAtom = atom(
	(get) => get(playlistAtom),
	async (_get, set, playlist: any) => set(playlistAtom, playlist)
)
