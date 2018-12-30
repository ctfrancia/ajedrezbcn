<template>
  <div class="home">
    <UserRegistration msg="¡User Register!"/>
  </div>
</template>

<script>
//------
//all JS goes here
//-----
import UserRegistration from '@/components/UserRegistration.vue';

export default {
  name: 'registerUser',
  components:{
    UserRegistration,
  },
}
</script>
<style scoped>
/* any component specific css goes here */
</style>