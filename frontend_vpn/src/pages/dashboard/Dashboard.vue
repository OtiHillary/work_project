<script setup>
//declaring imports here
import sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
</script>

<script type="module">
export default {
  mounted() {
    let storage = localStorage.getItem('userData')
    if (!storage) {
      this.$router.push('/login')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('userData')
      this.$router.push('/login')
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
        <div class="bg-purple-600 text-white p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-4">
          <div>
            <h2 class="text-xl font-bold">
            Website Analytics
            </h2>
            <p class="text-sm">
            Total 28.5% Conversion Rate
            </p>
          </div>
          <div class="flex space-x-2">
            <span class="w-2 h-2 bg-white rounded-full">
            </span>
            <span class="w-2 h-2 bg-white rounded-full opacity-50">
            </span>
            <span class="w-2 h-2 bg-white rounded-full opacity-50">
            </span>
          </div>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm">
                Spending
              </p>

              <div class="flex space-x-4 mt-2">
                <div class="text-center">
                  <p class="text-lg font-bold">
                  12h
                  </p>
                  <p class="text-xs">
                  Spend
                  </p>
                </div>
                <div class="text-center">
                  <p class="text-lg font-bold">
                  18
                  </p>
                  <p class="text-xs">
                  Order Size
                  </p>
                </div>
                <div class="text-center">
                  <p class="text-lg font-bold">
                  127
                  </p>
                  <p class="text-xs">
                  Order
                  </p>
                </div>
                <div class="text-center">
                  <p class="text-lg font-bold">
                  2.3k
                  </p>
                  <p class="text-xs">
                  Items
                  </p>
                </div>
              </div>
            </div>
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
          <button class="flex items-center px-6 py-2 my-3 w-fit bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Click me
          </button>

          <button @click="logout" class="flex items-center px-6 py-2 my-3 w-fit bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            logout test
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      sidebarItems: [
        { text: 'Dashboard', href: '#' },
        { text: 'Settings', href: '#' },
        { text: 'Help', href: '#' },
      ],
   };
  },
};
</script> -->