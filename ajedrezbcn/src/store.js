import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tournaments: [],
    language: '',
    languages: [
      { text: 'Castellano' },
      { text: 'Catalán' },
      { text: 'Inglés' },
      { text: 'Francés' },
      { text: 'Alemán' },
      { text: 'Chino' },
      { text: 'Vasco' },
      { text: 'Gallego' },
    ],
    extra: '',
    extras: [
      { text: 'Bar' },
      { text: 'Wifi' },
      { text: 'Reuniones' },
      { text: 'Dominos' },
      { text: 'Internacional' },
      { text: 'Cerca del Metro' },
      { text: 'Clases' },
      { text: 'Jugadors titelado' },
      { text: 'Amigable para Principiantes' },
    ],
    checkedLanguages: [],
    checkedExtras: [],
  },
  mutations: {
    setTournaments(state, data) {
      this.state.tournaments = data;
    },
  },
  // getters: {

  // },
  //FIXME: fix all of this it needs to actually map it to state, not doing so
  // read the docs on this.
  actions: {
    fetchTournaments(context) {
      return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((payload) => {
          const savedtTournaments = [...this.state.tournaments];

          store.commit('setTournaments', payload.data);

          console.log('paylod: ', payload);
          // this.listOfTournaments = payload.data;
        });
    },
  },
});
