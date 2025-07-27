<template>
  <div class="max-w-4xl mx-auto p-4 space-y-6">
    <h1 class="text-2xl font-bold text-center text-gray-800">Listas de reproducción</h1>

    <!-- Formulario para crear nueva playlist -->
    <PlaylistForm @created="loadPlaylists" />

    <ul class="space-y-3">
      <li
        v-for="list in playlists"
        :key="list.nombre"
        class="flex justify-between items-center p-4 bg-white rounded-md shadow hover:shadow-md transition-shadow"
      >
        <router-link
          :to="`/playlists/${list.nombre}`"
          class="text-lg font-medium text-gray-700 hover:text-yellow-500 transition-colors"
        >
          {{ list.nombre }}
        </router-link>
        <button
          @click="deleteList(list.nombre)"
          class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
        >
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import playlistsService from '../services/playlists'
import PlaylistForm from '../components/PlaylistForm.vue'

const playlists = ref([])

const loadPlaylists = async () => {
  const res = await playlistsService.getAll()
  playlists.value = res.data
}

const deleteList = async (name) => {
  await playlistsService.delete(name)
  loadPlaylists()
}

onMounted(loadPlaylists)
</script>
