<template>
  <form @submit.prevent="createList">
    <h3>Crear nueva lista</h3>
    <input v-model="nombre" placeholder="Nombre de la lista" />
    <input v-model="descripcion" placeholder="Descripción" />

    <h4>Canciones</h4>
    <div v-for="(cancion, index) in canciones" :key="index" style="margin-bottom:10px;">
      <input v-model="cancion.titulo" placeholder="Título" />
      <input v-model="cancion.artista" placeholder="Artista" />
      <input v-model="cancion.album" placeholder="Álbum" />
      <input v-model="cancion.anno" placeholder="Año" />
      <input v-model="cancion.genero" placeholder="Género" />
      <button type="button" @click="removeCancion(index)">Eliminar</button>
    </div>

    <button type="button" @click="addCancion">Agregar otra canción</button>
    <br />
    <button type="submit">Crear lista</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import playlistsService from '../services/playlists'

const emit = defineEmits(['created'])

const nombre = ref('')
const descripcion = ref('')
const canciones = ref([
  { titulo: '', artista: '', album: '', anno: '', genero: '' }
])

const addCancion = () => {
  canciones.value.push({ titulo: '', artista: '', album: '', anno: '', genero: '' })
}

const removeCancion = (index) => {
  canciones.value.splice(index, 1)
}

const createList = async () => {
  const nuevaLista = {
    nombre: nombre.value,
    descripcion: descripcion.value,
    canciones: canciones.value
  }
  try {
    await playlistsService.create(nuevaLista)
    // Limpia formulario
    nombre.value = ''
    descripcion.value = ''
    canciones.value = [{ titulo: '', artista: '', album: '', anno: '', genero: '' }]
    emit('created')
  } catch (err) {
    alert('Error al crear la lista')
  }
}
</script>
