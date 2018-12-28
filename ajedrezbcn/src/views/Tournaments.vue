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
import CreateTournamentForm from '@/components/CreateTournamentForm.vue';

//TODO: create a child for creating a new tournament
export default {
  name: 'tournaments',
  components:{
    Tournaments,
    CreateTournamentForm,
  },
}
</script>
<style scoped>
/* any component specific css goes here */
</style>