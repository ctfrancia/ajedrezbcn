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
  border: none;
  cursor: pointer;
  background: #FFFCF7;
}
</style>
