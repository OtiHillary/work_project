<script>
export default {
   mounted() {
      let storage = localStorage.getItem('userData')
   },
   
   data() {
      return {
         dropped: false,
      }
   },

   methods: {
      dropMenu() {
         this.dropped = !this.dropped
      },

      logout() {
         localStorage.removeItem('userData')
         this.$router.push('/login')
      }
   }
}
</script>

<template>
   <div class="bg-white rounded-md shadow-md shadow-gray-100 p-2 px-4 flex flex-col md:flex-row items-center justify-between mb-6">
      <div class="relative w-full md:w-1/2 mb-4 md:mb-0">
         <input class="w-full px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Search" type="text"/>
         <i class="fas fa-search absolute top-3 right-4 text-gray-400">
         </i>
      </div>
      <div class="flex items-center">
         <i class="fas fa-bell text-xl text-gray-600 mr-4">
         </i>
         <div class="relative">
            <img @click="dropMenu" alt="User Avatar" class="w-10 h-10 rounded-full" height="40" src="../../../assets/profileIMG.png" width="40"/>
            <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full">
            </span>
            <div v-if="dropped" class="absolute -top-100 right-0 bg-white rounded shadow-md p-2">
               <button @click="logout" class="px-4 py hover:bg-slate-50">logout</button>
            </div>
         </div>
      </div>
   </div>
</template>