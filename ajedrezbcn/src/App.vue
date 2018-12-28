<template>
  <div id="app">
    <div id="nav">
      <div class="donate">
      <router-link to="/donate">Donar</router-link>
      </div>

      <div class="rest">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/tournaments">Torneos</router-link> |
      <router-link to="/registerclub">Registra Su Club</router-link> |
      <router-link to="/registeruser">Crea Una Cuenta</router-link> |
      <router-link to="/login">Iniciar Sesión</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Maven Pro','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background-color: #bcbdc0;
  color: #565857;
}
#nav {
  display: flex;
  padding: 30px;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: #8a8d91;
}

#nav a.router-link-exact-active {
  color: #fffcf7;
}
</style>
