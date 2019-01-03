<template>
  <div class="home">
    <TournamentsMainPage msg="Tournaments"/>
  </div>
</template>

<script>
//------
//all JS goes between script tags
//-----
import TournamentsMainPage from '@/components/TournamentView.vue';

//TODO: create a child for creating a new tournament
export default {
  name: 'tournaments',
  components:{
    TournamentsMainPage,
  },
}
</script>
<style scoped>
/* any component specific css goes here */
</style>