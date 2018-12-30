<template>
  <div class="container">
      <button class="hvr-radial-in">
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
    width: 20vw;
    background: none;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    background: none;
    border: 1px solid #fffcf7;
    border-radius: 5px;
  }

.hvr-radial-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  background: #738290;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-radial-in:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e1e1e1;
  border-radius: 100%;
  -webkit-transform: scale(2);
  transform: scale(2);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-radial-in:hover, .hvr-radial-in:focus, .hvr-radial-in:active {
  color: white;
}
.hvr-radial-in:hover:before, .hvr-radial-in:focus:before, .hvr-radial-in:active:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}

</style>
