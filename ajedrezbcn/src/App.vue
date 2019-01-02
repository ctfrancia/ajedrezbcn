<template>
  <div id="app">
    <div id="nav">
      <div class="donate">
      <router-link class="hvr-grow" to="/donate">Donar</router-link>
      </div>
      <div class="rest">
      <router-link class="hvr-grow" to="/">Home</router-link> |
      <router-link class="hvr-grow" to="/tournaments">Torneos</router-link> |
      <router-link class="hvr-grow" to="/registerclub">Registra Su Club</router-link> |
      <router-link class="hvr-grow" to="/registeruser">Crea Una Cuenta</router-link> |
      <router-link class="hvr-grow" to="/login">Iniciar Sesión</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
html{
  background-color: #565857;
}
#app {
  font-family: 'Maven Pro','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background-color: #ebe2dd;
  color: #6e6d68;
  /* font-size: 20px; */
}
#nav {
  display: flex;
  padding: 30px;
  justify-content: space-between;
  color: #da8577;
}

#nav a {
  font-weight: bold;
  color: #b4915c;
}

#nav a.router-link-exact-active {
  color: #fffcf7;
}
.hvr-grow {
  margin: 0px 5px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

  input[type=text],
  input[type=tel],
  input[type=email],
  input[type=password] {
  border: 0;
  box-shadow: -8px 10px 0px -7px #bb9f7a, 8px 10px 0px -7px #bb9f7a;
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
  }

  input[type=text]:focus{
  outline: none;
  box-shadow: -8px 10px 0px -7px rgb(78, 107, 234), 8px 10px 0px -7px rgb(78, 107, 234);
  }
  input[type=tel]:focus{
  outline: none;
  box-shadow: -8px 10px 0px -7px rgb(78, 107, 234), 8px 10px 0px -7px rgb(78, 107, 234);
  }
  input[type=email]:focus{
  outline: none;
  box-shadow: -8px 10px 0px -7px rgb(78, 107, 234), 8px 10px 0px -7px rgb(78, 107, 234);
  }
  input[type=password]:focus{
  outline: none;
  box-shadow: -8px 10px 0px -7px rgb(78, 107, 234), 8px 10px 0px -7px rgb(78, 107, 234);
  }
  
</style>
