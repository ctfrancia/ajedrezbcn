<template>
  <div class="home">
    <HomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue';
//components is saying who the children are
export default {
  name: 'home',
  components: {
    HomePage,
  },
};
</script>
