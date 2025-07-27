import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PlaylistsView from '../views/PlaylistsView.vue'
import PlaylistDetailView from '../views/PlaylistDetailView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/playlists', component: PlaylistsView },
  { path: '/playlists/:name', component: PlaylistDetailView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
