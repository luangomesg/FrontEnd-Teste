import axios from "axios";


const api = axios.create({
    baseURL: "https://the-one-api.dev/v2"
})

api.interceptors.request.use(async config => {
    const token = 'pg0SG-ab0GUigQguAjIH'

    config.headers.Authorization = `Bearer ${token}`

    return config
})

export default api