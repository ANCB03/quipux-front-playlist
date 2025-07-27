<template>
  <div>
    <h1>Registro</h1>
    <form @submit.prevent="handleRegister">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Registrarse</button>
    </form>
    <router-link to="/login">Volver a Login</router-link>
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

const handleRegister = async () => {
  try {
    await authStore.register({ email: email.value, password: password.value })
    router.push('/login')
  } catch (e) {
    alert('Registro fallido')
  }
}
</script>
