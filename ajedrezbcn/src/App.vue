<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/torneos">Torneos</router-link> |
      <router-link to="/clubregistrar">Registra Su Club</router-link> |
      <router-link to="/usarioregistracion">Crea una Cuenta</router-link> |
      <router-link to="/login">Iniciar Sesión</router-link> |
      <router-link to="/donar"> Donar </router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
