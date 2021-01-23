import Axios from "axios"
import queryString from 'query-string'

const shipper = Axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true,
    paramsSerializer: params => queryString.stringify(params),
})

shipper.interceptors.request.use(async (config) => {
    // Handle token here...
    return config
})

shipper.interceptors.response.use((res) => {
    if (res && res.data) {
        return res.data
    }

    return res
}, (err) => {
    // Handle error
    throw err
})

export default shipper