import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

export const fetcher = async <T = any>(
    endpoint: string,
    params: any,
    method: AxiosRequestConfig['method'] = 'post',
    optHeader: AxiosRequestConfig['headers'] = {}
): Promise<T> => {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
        ...optHeader
    }

    const isGet = method === 'get'

    const requestConfig: AxiosRequestConfig = {
        url: endpoint,
        method,
        headers,
        ...(isGet ? { params } : { data: params })
    }

    try {
        const response = await axios(requestConfig)
        return response.data
    } catch (error) {
        throw error
    }
}
