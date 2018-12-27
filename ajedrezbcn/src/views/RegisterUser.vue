<template>
  <div class="home">
    <RegisterUser msg="User Register"/>
  </div>
</template>

<script>
//------
//all JS goes here
//-----
import RegisterUser from '@/components/UserRegistration.vue';

export default {
  name: 'registerUser',
  components:{
    RegisterUser,
  },
}
</script>
<style scoped>
/* any component specific css goes here */
</style>