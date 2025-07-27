<template>
  <div v-if="playlist">
    <h1>{{ playlist.nombre }}</h1>
    <p>{{ playlist.descripcion }}</p>

    <h2>Canciones</h2>
    <ul>
      <li v-for="song in playlist.canciones" :key="song.titulo">
        {{ song.titulo }} - {{ song.artista }}
      </li>
    </ul>

    <router-link to="/playlists">Volver</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import playlistsService from '../services/playlists'

const route = useRoute()
const playlist = ref(null)

const loadPlaylist = async () => {
  const res = await playlistsService.getOne(route.params.name)
  playlist.value = res.data
}

onMounted(loadPlaylist)
</script>
