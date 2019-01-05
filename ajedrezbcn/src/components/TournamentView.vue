<template>
  <div class="container">
    <div class='title'>
      <h1>{{msg}}</h1>
    </div>
    <div class='comps'>
      <router-link to="/createtournament">
        <CreateTournamentButton/>
      </router-link>
      <div class="listContainer">  
        <TournamentLists
            v-for="tournament in listOfTournaments" 
            v-bind:key="tournament.id"
            v-bind:tournament="tournament"
        />
      </div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import CreateTournamentButton from './CreateTournamentButton.vue';
import TournamentLists from './TournamentLists.vue';
import axios from 'axios';


//  here is where the call will be made to the database to get the list of all tournaments within barecelona
export default {
  name: 'TournamentView',
  props: {
    msg: String,
  },
  components: {
    CreateTournamentButton,
    TournamentLists,
  },
  // computed: {
  //   tournaments(){
  //     return this.$store.state.tournaments;
  //     }
  //   },
  data: () => {
    return {
      listOfTournaments: []
    }
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((payload) => {
        console.log('paylod: ', payload);
        this.listOfTournaments = payload.data});
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
  .listContainer{
    display: flex;
    /* flex-direction: row; */
    width: 90vw;
    align-items: center;
    flex-wrap: wrap;
  }

</style>
