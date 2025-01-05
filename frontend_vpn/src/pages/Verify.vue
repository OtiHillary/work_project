<script>
export default {
    computed: {
        token() {
            return this.$route.query;
        }
    },

    mounted() {
        const { token } = this.$route.query
        this.validateToken(token)   
    },

    data() {
      return {
        message: 'Verifying...',
        success: false,
        loading: true,
      }
   },

    methods : {
        async validateToken(data){
            try {
                const res = await fetch('http://135.148.24.68:3000/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({token: data})
                })

                const response = await res.json()
                console.log(response);
                
                if (!res.ok) {
                    throw new Error(response.message)
                }

                this.message = 'Account verified successfully'
                this.decription = 'success'
                this.success = true
                this.loading = false

            } catch (error) {
                console.log(error)
                this.message = 'Account verification failed'
                this.decription = 'error with verification'
                this.success = false
                this.loading = false
            }    
        }
    }
    
}
</script>

<template>
    <div class="w-screen h-screen flex flex-col justify-center">
       <div class="bg-white flex rounded-lg shadow-lg w-fit h-fit mx-auto">
          <div class=" flex flex-col p-8">
             <h1 class="text-3xl font-light text-left mb-4">{{ message }}</h1>
             <!-- <p class="font-thin mb-2">{{ description }}</p> -->
             <a v-if="success" href="/login" class="w-fit text-green-600 underline">
                Back to login
             </a>
          </div>
       </div>       
    </div>
 </template>
