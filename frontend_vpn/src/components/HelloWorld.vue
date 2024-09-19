<script setup>
  defineProps({
    msg: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
  <h3>
    {{ message }}
  </h3>
</template>

<script>
export default {
  data() {
    return {
      message: 'loading...',
    };
  },
  methods: {
    async fetchMessage() {
      console.log('fetchig=ng data');
      try {
        const response = await fetch('http://localhost:3000/hello');
        this.message = response.data.message;
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    },
  },
  mounted() {
    this.fetchMessage();
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
