<script>
export default {
   mounted() {
      let storage = localStorage.getItem('userData')
      const token = new URLSearchParams(window.location.search).get('token');

      fetch('http://135.148.24.68:3000/')
      
      if (storage) {
         this.$router.push('/dashboard')
      }

      if (token) {
        localStorage.setItem('userData', token);
        this.$router.push('/dashboard');
    }
   },
   
   data() {
      return {
         formData: {
            email: '',
            password: ''
         },
         errorMessage: 'no message',
         errorVisible: false,
         loading: false,

      }
   },
   methods: {
      changeForm(event) {
         console.log( this.formData );
         
         let tempFormdata = { ...this.formData, [event.target.name]: event.target.value }
         this.formData = tempFormdata
         console.log(this.formData);
      },

      async redirectToGoogleOAuth() {
         const clientId = '588057669834-i9aa7c62qqg7a7jqs5ugapf1lfoi883n.apps.googleusercontent.com';
         const redirectUri = 'https://dashboard.techdispatch.us/api/auth/google/callback'; // Your backend callback
         const scope = 'openid email profile';
         const responseType = 'code';

         const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
         
         window.location.href = url;
      },

      async signin(event) {
         event.preventDefault()
         console.log(`Signin in with data: ${ this.formData }, please wait...`)
         this.loading = true

         try {
            const res = await fetch('http://135.148.24.68:3000/login-auth', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(this.formData)
            })

            if (res.status == 401) {
               this.$router.push('/not-verified')
            }

            if(res.status == 200) {
               const user = await res.json()
               console.log('setting user in local storage as', user)  
               localStorage.setItem('userData', user.token)
               this.$router.push('/dashboard')                
            }

            else {
               throw new Error(res.message)
            }

         } catch (error) {
            console.log(error)
            this.errorMessage = error
            this.errorVisible = true
            this.loading = false
         }

      },
   }
}
</script>

<template>
   <div class="w-screen h-screen flex justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full h-fit my-auto max-w-md">
         <h1 class="text-3xl font-semibold text-left mb-4">Login</h1>
         <div v-if="errorVisible" class="border-red-400 border-l-4 text-red-400 bg-red-50 p-3 my-1">{{ errorMessage }}</div>
         
         <form @submit="signin">
            <div class="mb-4">
               <label class="block text-gray-700 mb-2" for="email">Email or Username</label>
               <input name="email" @change="changeForm" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" type="email" id="email" placeholder="Enter your email or username">
            </div>
            <div class="mb-4">
               <label class="block text-gray-700 mb-2" for="password">Password</label>
               <div class="relative">
               <input name="password" @change="changeForm" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" type="password" id="password" placeholder="••••••••">
               <i class="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer"></i>
               </div>
            </div>
            <div class="flex items-center justify-between mb-6">
               <label class="flex items-center">
               <input type="checkbox" class="form-checkbox text-purple-600">
               <span class="ml-2 text-gray-700">Remember Me</span>
               </label>
               <a href="/reset-password" class="text-purple-600 hover:underline">Forgot Password?</a>
            </div>

            <button v-if="loading" class="w-full bg-purple-400 text-white py-2 rounded-lg transition duration-200">
               Loading...
            </button>
            <button v-else class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200">
               Login
            </button>
            <div>

            <button @click="redirectToGoogleOAuth" class="flex justify-center items-center w-full px-4 py-2 my-2 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
               <img src="https://pluspng.com/img-png/google-logo-png-open-2000.png" alt="Google Logo" class="h-6 me-3"/>
               Sign in with Google
            </button>
         </div>
         </form>

         <p class="text-center text-gray-600 mt-6">New on our platform? <a href="/signup" class="text-purple-600 hover:underline">Create an account</a></p>
      </div> 
   </div>
</template>
