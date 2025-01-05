import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

//import routes
import login from './pages/Login.vue'
import dashboard from './pages/dashboard/Dashboard.vue'
import signup from './pages/Signup.vue'
import PasswordReset from './pages/PasswordReset.vue'
import Verify from './pages/Verify.vue'
import AccountCreated from './pages/AccountCreated.vue'
import NotVerified from './pages/NotVerified.vue'
import Superadmin from './pages/superadmin.vue'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: '/', component: dashboard },
      { path: '/dashboard', component: dashboard },
      { path: '/login', component: login },
      { path: '/signup', component: signup },
      { path: '/reset-password', component: PasswordReset },
      { path: '/verify', component: Verify },
      { path: '/account-created', component: AccountCreated},
      { path: '/not-verified', component: NotVerified},
      { path: '/admin', component: Superadmin},
   ]
})
const app = createApp(App)

app.use(router)
app.mount('#app')
