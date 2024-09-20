import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
//import routes
import login from './pages/Login.vue'
import dashboard from './pages/Dashboard.vue'
import Signup from './pages/signup.vue'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: '/', component: dashboard },
      { path: '/dashboard', component: dashboard },
      { path: '/login', component: login },
      { path: '/signup', component: Signup },
   ]
})
const app = createApp(App)

app.use(router)
app.mount('#app')
