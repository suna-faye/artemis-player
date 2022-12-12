import { createCipheriv, createHash } from 'crypto'
import { eapiKey } from './consts'

export const toMD5 = (str: string) => createHash('md5').update(str).digest('hex')

const aesEncrypt = (buffer: any, mode: any, key: any, iv: any) => {
	const cipher = createCipheriv(mode, key, iv)
	return Buffer.concat([cipher.update(buffer), cipher.final()])
}

export const eapi = (url: string, params: any) => {
	console.log('eapi called')

	const text = typeof params === 'object' ? JSON.stringify(params) : params
	const message = `nobody${url}use${text}md5forencrypt`
	const digest = createHash('md5').update(message).digest('hex')
	const data = `${url}-36cd479b6b5-${text}-36cd479b6b5-${digest}`

	return {
		params: aesEncrypt(Buffer.from(data), 'aes-128-ecb', eapiKey, '')
			.toString('hex')
			.toUpperCase(),
	}
}
