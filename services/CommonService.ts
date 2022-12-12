import { service } from './BaseService'
import { HTTP_STATUS_CODE_2XX, MUSIC_QUALTITY } from 'artemis/common/consts';
import { Song } from 'artemis/interfaces';

const mapResToArtist = (ar: any) => {
	return ar.map((artist: any) => ({
		id: artist.id,
		name: artist.name,
		aliaList: artist.alias,
		tnsList: artist.tns, // translate
	}))
}

const mapSearchResultToList = (songs: any[]):Song[] => {
	return songs.map((song: any) => ({
		id: song.id,
		album: song.al,
		name: song.al.name,
		aliaList: song.alia,
		pblTime: song.publishTime,
		artist: mapResToArtist(song.ar),
		datetime: song.dt, // song durations
	}))
}

export const searchByKeyword = async (keywords: string, limit = 30, offset = 1) => {
	try {
		const {status, data} = await service.get(`/cloudsearch?keywords=${keywords}&limit=${limit}&offset=${offset}`)
		if (status === HTTP_STATUS_CODE_2XX.OK) {
			return mapSearchResultToList(data.result?.songs ?? []) ?? []
		}
	} catch (err: any) {
			console.error(err)
	}
}

export const getMusicUrlById = async (idList: number[], qualtity: MUSIC_QUALTITY) => {
	try {
		const {status, data} = await service.get(`/song/url/v1?id=${idList.join(',')}&level=${qualtity}`)
		if (status === HTTP_STATUS_CODE_2XX.OK) {
			return data.data[0].url
		}
	} catch (err: any) {
		console.error(err)
	}
}