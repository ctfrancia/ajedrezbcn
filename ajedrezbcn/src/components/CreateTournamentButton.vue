<template>
  <div class="container">
      <button>
        Criar Torneo
      </button>
  </div>
</template>
<script>
import CreateTournamentForm from './CreateTournamentForm.vue';

export default {
  name: 'CreateTournametButton',
  components: {
    CreateTournamentForm,
  }
}
</script>

<style scoped>
  button {
    margin: 5px 10vw;
    height: 2em;
    background: none;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    background: none;
    border: 1px solid #fffcf7;
    border-radius: 5px;
  }
</style>
