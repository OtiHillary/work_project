<script>
export default {
  created() {
    const token = localStorage.getItem('token')
    // if (!token) this.$router.push('/login')
  }  
}
</script>

<template>
  <router-view></router-view>
</template>