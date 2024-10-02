<script>
export default {
   data() {
      return {
         formData: {
            email: '',
            password: ''
         },
         errorMessage: 'no message',
         errorVisible: false

      }
   },
   methods: {
      changeForm(event) {
         console.log( this.formData );
         
         let tempFormdata = { ...this.formData, [event.target.name]: event.target.value }
         this.formData = tempFormdata
         console.log(this.formData);
      },
      async signin(event) {
         event.preventDefault()
         console.log(`Signin in with data: ${ this.formData }, please wait...`)

         try {
            const res = await fetch('http://localhost:3000/login-auth', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(this.formData)
            })

            const user = await res.json()
            console.log(user)  
            localStorage.setItem('userData', user)
            this.$router.push('/dashboard') 

         } catch (error) {
            console.log(error)
            this.errorMessage = "login failed, try again"
            this.errorVisible = true
         }

      }  
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
               <a href="#" class="text-purple-600 hover:underline">Forgot Password?</a>
            </div>
            <button class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200">Login</button>
         </form>

         <p class="text-center text-gray-600 mt-6">New on our platform? <a href="/signup" class="text-purple-600 hover:underline">Create an account</a></p>
      </div> 
   </div>
</template>
