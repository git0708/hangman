const axios = require('axios');
class AxiosAPI {
    constructor(url) {
        this.baseUrl = url
    }
    getMethod(relativeUrl, queryParams) {
        let url = `${this.baseUrl}${relativeUrl}`
        if (queryParams) {
            url = `${url}?${queryParams}`
        }
        return axios.get(`${url}`)
    }
}

module.exports = { AxiosAPI };