import Axios, { AxiosResponse } from 'axios'

const service = Axios.create({
	baseURL: process.env.NEXT_PUBLIC_PROXY_NETEASE,
	timeout: 30000,
})

service.interceptors.response.use(
	(response: any) => {
		console.log(response)
		return response
	},
	(error: any) => {
		console.log(error)
		return Promise.reject(error)
	}
)

export { service }
