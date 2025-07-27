import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    async login(credentials) {
      const response = await axios.post('http://localhost:8085/auth/login', credentials)
      this.token = response.data.token
      localStorage.setItem('token', this.token)
    },
    async register(data) {
      await axios.post('http://localhost:8085/auth/register', data)
    },
    logout() {
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})
