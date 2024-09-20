<script>

</script>

<template>
   <div class="w-screen h-screen flex justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full h-fit my-auto max-w-md">
         <h1 class="text-3xl font-semibold text-left mb-4">Sign Up</h1>
         <form>
            <div class="mb-4">
               <label class="block text-gray-700 mb-2" for="email">Email or Username</label>
               <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" type="text" id="email" placeholder="Enter your email or username">
            </div>
            <div class="mb-4">
               <label class="block text-gray-700 mb-2" for="password">Password</label>
               <div class="relative">
               <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" type="password" id="password" placeholder="••••••••">
               <i class="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer"></i>
               </div>
            </div>
            <div class="flex items-center justify-between mb-6">
               <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-purple-600">
                  <span class="ml-2 text-gray-700">Remember Me</span>
               </label>
            </div>
            <button class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200">Sign up</button>
         </form>
         <a class="text-purple-600 hover:underline" href="/login">I have an account</a>
      </div> 
   </div>
</template>