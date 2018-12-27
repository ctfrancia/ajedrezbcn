<template>
  <div class="home">
    <Tournaments msg="Tournaments"/>
  </div>
</template>

<script>
//------
//all JS goes between script tags
//-----
import Tournaments from '@/components/TournamentView.vue';

//TODO: create a child for creating a new tournament
export default {
  name: 'tournaments',
  components:{
    Tournaments,
  },
}
</script>
<style scoped>
/* any component specific css goes here */
</style>