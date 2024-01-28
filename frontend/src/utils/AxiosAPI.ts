import axios, { AxiosHeaders } from 'axios';


class AxiosAPI {
    private baseUrl: string;
    constructor(url: string) {
        this.baseUrl = url
    }
    getMethod(relativeUrl: string, queryParams: undefined | string, options?: any): Promise<string[]> {
        let url: string = `${this.baseUrl}${relativeUrl}`
        if (queryParams) {
            url = `${url}?${queryParams}`
        }
        return axios.get(`${url}`,options)
    }
    postMethod(relativeUrl: string, payload: string,options?:any) {
        let url: string = `${this.baseUrl}${relativeUrl}`
        return axios.post(url, payload,options)
    }
    putMethod(relativeUrl: string, payload: string,options?:any) {
        let url: string = `${this.baseUrl}${relativeUrl}`
        return axios.put(url, payload,options)
    }
}

export default AxiosAPI;