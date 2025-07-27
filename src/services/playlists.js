import axios from 'axios'
import { useAuthStore } from '../stores/auth'

const api = axios.create({
  baseURL: 'http://localhost:8085',
})

api.interceptors.request.use(config => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

export default {
  getAll: () => api.get('/lists'),
  getOne: (name) => api.get(`/lists/${name}`),
  create: (data) => api.post('/lists', data),
  delete: (name) => api.delete(`/lists/${name}`)
}
