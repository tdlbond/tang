import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 6 * 1000
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

export default instance
