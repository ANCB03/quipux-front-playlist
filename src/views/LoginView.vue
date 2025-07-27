<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-gray-100">
    <div class="w-full max-w-md bg-white border border-yellow-200 rounded-xl shadow-xl p-8 space-y-8">
      <h1 class="text-3xl font-extrabold text-center text-yellow-500 drop-shadow-sm">Iniciar sesión</h1>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="space-y-2">
          <label class="block text-gray-700 font-semibold">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="correo@ejemplo.com"
            class="w-full px-4 py-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-yellow-50 placeholder-yellow-300"
          />
        </div>
        <div class="space-y-2">
          <label class="block text-gray-700 font-semibold">Contraseña</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-yellow-50 placeholder-yellow-300"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-md transition-all duration-200 shadow hover:shadow-md"
        >
          Login
        </button>
      </form>

      <div class="text-center mt-4">
        <router-link to="/register" class="text-sm font-medium text-yellow-500 hover:text-yellow-600 hover:underline transition-colors">
          ¿No tienes cuenta? Regístrate
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    await authStore.login({ email: email.value, password: password.value })
    router.push('/playlists')
  } catch (e) {
    alert('Login failed')
  }
}
</script>
