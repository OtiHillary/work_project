<script setup>
//declaring imports here
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen w-screen" id="app">
   <!-- Sidebar -->
    <div class="w-full md:w-[17rem] bg-white shadow-md">
      <div class="flex items-center justify-center h-16">
        <i class="fas fa-vuejs text-3xl text-purple-600">
        </i>
        <span class="ml-2 text-xl font-bold">
          App Project
        </span>
      </div>
      <ul class="mt-4">
        <li class="flex items-center px-4 py-2 mx-2 rounded-lg hover:text-gray-600 shadow-md bg-purple-600 text-white hover:bg-gray-200">
          <i class="fas fa-tachometer-alt">
          </i>
          <span class="ml-2">
          VPNs
          </span>
          <span class="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          1
          </span>
        </li>
      </ul>
    </div>
    
    <!-- Main Content -->
    <div class="flex-1 p-6 py-4">
      <!-- Top Bar -->
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
          <img alt="User Avatar" class="w-10 h-10 rounded-full" height="40" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-EojUoGzz6V9n7bs8n9TbIqcB.png?st=2024-09-19T10%3A50%3A31Z&amp;se=2024-09-19T12%3A50%3A31Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-19T02%3A09%3A55Z&amp;ske=2024-09-20T02%3A09%3A55Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=kWOm7Qk3hPdMAuoj2xbJyZk7ooRts4a0ZZrgjqR3bZ0%3D" width="40"/>
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full">
          </span>
          </div>
        </div>
      </div>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
</script>