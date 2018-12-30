<template>
  <div class="container">
    <div class='title'>
      <h1>{{msg}}</h1>
    </div>
    <div class='comps'>
      <router-link to="/createtournament">
        <CreateTournamentButton/>
      </router-link>
      
      <TournamentLists />
    </div>
    <!-- <router-view /> -->
    <!-- -->
  </div>
</template>
<script>
import CreateTournamentButton from './CreateTournamentButton.vue';
import TournamentLists from './TournamentLists.vue';

//  here is where the call will be made to the database to get the list of all tournaments within barecelona
export default {
  name: 'TournamentView',
  props: {
    msg: String,
  },
  components: {
    CreateTournamentButton,
    TournamentLists,
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .comps {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    
  }
</style>
