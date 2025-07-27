<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header que respeta el ancho máximo del app -->
    <header class="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg w-full">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo y título -->
          <div class="flex items-center space-x-3">
            
            <div>
              <span class="text-xl font-bold tracking-tight">My Playlists</span>
            </div>
          </div>

          <!-- Navegación compacta -->
          <nav class="flex items-center space-x-2">
            <RouterLink 
              to="/login" 
              class="px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 hover:text-yellow-400 transition-all duration-200 border border-transparent hover:border-gray-600"
            >
              Login
            </RouterLink>
            <RouterLink 
              to="/register" 
              class="px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 hover:text-yellow-400 transition-all duration-200 border border-transparent hover:border-gray-600"
            >
              Registro
            </RouterLink>
            <RouterLink 
              to="/playlists" 
              class="px-4 py-2 rounded-md text-sm font-medium bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-all duration-200 shadow-sm"
            >
              Mis Playlists
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Contenido que usa el sistema de grid existente -->
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>
