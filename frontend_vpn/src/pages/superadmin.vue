<script>
export default {
   mounted() {
      let storage = localStorage.getItem('userData')
      fetch('http://135.148.24.68:3000/')
      if (storage) {
        this.$router.push('/dashboard')
      }
   },
   
   data() {
      return {
        formData: {
         email: '',
        },
        width: 100,
        errorMessage: 'no message',
        successVisible: false,
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

      async successRedirect(){
         this.successVisible = true
         const intervalId = setInterval(() => {
            if (this.width > 0) {
               this.width--;
            } else {
               clearInterval(intervalId);
               this.successVisible = false
            }
         }, 35);
      },

      async resend(event) {
         event.preventDefault()
         console.log(`please wait... formData is: ${this.formData}`)
         this.loading = true

         try {
            const res = await fetch('http://135.148.24.68:3000/admin-mail', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(this.formData)
            })

            if (!res.ok) {
               throw new Error("server error")
            }

            await this.successRedirect()

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

      <div v-if="successVisible" class="bg-white rounded-lg shadow-lg w-full h-fit my-auto max-w-md absolute top-[15%] -translate-y-1/2">
         <div class="bg-gray-50 w-full h-1 flex justify-start">
            <div class="bg-green-500 h-1" :style="{ width: width + '%' }"></div>
         </div>

         <div class=" flex flex-col p-6 pt-2">
            <h1 class="text-2xl font-light text-left">Successful</h1>
            <p class="font-bold">We've sent a mail to the recipient.</p>
         </div>
      </div> 

      <div class="bg-white p-8 rounded-lg shadow-lg w-full h-fit my-auto max-w-md">
         <h1 class="text-3xl font-semibold text-left mb-6">Send mail from admin</h1>
         <div v-if="errorVisible" class="border-red-400 border-l-4 text-red-400 bg-red-50 p-3 my-1">{{ errorMessage }}</div>
         
         <form @submit="resend">
            <div class="mb-4">
               <input name="email" @change="changeForm" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" type="email" id="email" placeholder="Enter your email or username">
            </div>

            <button v-if="loading" class="w-full bg-purple-400 text-white py-2 rounded-lg transition duration-200">
               Loading...
            </button>
            <button v-else class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200">
               Reset password
            </button>
         </form>
      </div> 
   </div>
</template>
