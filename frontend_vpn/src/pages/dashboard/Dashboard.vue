<script setup>
//declaring imports here
import sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
</script>

<script type="module">
export default {
  data() {
    return {
      imageSrc: null
    }
  },

  mounted() {
    let storage = localStorage.getItem('userData')
    if (!storage) {
      this.$router.push('/login')
    }

    console.log('mounted');
    this.fetchData()
  },

  methods: {
    logout() {
      localStorage.removeItem('userData')
      this.$router.push('/login')
    },

    async fetchData(){
      const res = await fetch("http://localhost:3000/fetch-data", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName: 'test.jpeg' })
      })     

      const blob = await res.blob();
      this.imageSrc = URL.createObjectURL( blob);
      console.log('the response is:', res)
    },

    async fetchConf() {
      const link = document.createElement('a');
      link.href = 'http://localhost:3000/download-conf'; // URL for the config file
      link.download = 'config.conf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
    }
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen w-screen" id="app">
   <!-- Sidebar -->
    <sidebar/>
    
    <!-- Main Content -->
    <div class="flex-1 p-6 py-4">
      <!-- Top Bar -->
      <Topbar/>

      <!-- Dashboard Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- Image preview card -->
        <div class="flex justify-center bg-purple-600 text-white p-6 rounded-lg shadow-md">
            <img v-if="imageSrc" :src="imageSrc" alt="Image from backend">
            <div v-else class="flex flex-col justify-center">
              <img src="/src/assets/loading.gif" alt="image from backend" class="w-8 h-8 m-auto">
              <p class="font-bold">loading...</p>
            </div>
        </div>

      <!-- Download file-->
        <div class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
          <h2 class="text-xl font-bold">
            Download file(s)
          </h2>
          <p class="text-sm text-gray-500 my-2">
            Download .conf file(s) here
          </p>
          <button v-on:click="fetchConf" class="flex items-center px-6 py-2 my-3 w-fit bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

