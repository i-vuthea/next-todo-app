import axios from "axios"

const service = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})

export default {
    ...service,
    get(url, params = {}) {
        return service.request({
            url,
            params,
            method: 'GET',
        })
    },
    post(url, data) {
        return service.request({
            url,
            data,
            method: 'POST',
        })
    }
}

