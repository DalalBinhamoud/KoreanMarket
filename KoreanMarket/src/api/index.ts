import axios from 'axios'
// import { REACT_APP_BASE_URL } from '@env'

// Create axios client, pre-configured with baseURL
let api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
})

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token) => {
  api.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`
    return config
  })
}

export default api
