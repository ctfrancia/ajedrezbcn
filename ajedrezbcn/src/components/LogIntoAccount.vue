<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <form action="submit">
      <p>Username:</p><input class="u-p" type="text">
      <p>Password:</p><input class="u-p" type="text">
      <input type="submit" id="b-submit" class="hvr-fade" value= "Submit">
    </form>
  </div>
</template>
<script>

export default {
  name: 'LogIntoAccount',
  props: {
    msg: String,
  },
}
</script>
<style scoped>
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px black solid;
    -webkit-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    -moz-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
  }

  input {
    background: none;
  }
  #b-submit{
    margin: 5px 10vw;
    border:none;
    height: 2em;
    background: none;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
  }
  .u-p {
    width: 20vw;
  }
  .container{
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  .hvr-fade {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;
}
  .hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {
    background-color: #2098D1;
    color: white;
  }
</style>
