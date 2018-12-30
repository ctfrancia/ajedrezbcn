<template>
  <div id="UserRegistration" class="container">
    <h1>{{msg}}</h1>

    <form action="submit">
      <h2>This is important as that is how we are going to find your ELO information</h2>
      <div id="name">
        <p class="fname">First name:</p> <input class="i-name" type="text">
        <p class="lname">Last name:</p> <input class="i-name" type="text">
      </div>
      <div id="email-and-password">
        <p>E-mail:</p> <input type="email" class="e-p" name="i-email" id="e-mail">
        <p>Password:</p><input type="password" class="e-p" name="" id="password">
        <p>Retype password:</p><input type="password" class="e-p" name="" id="r-password">
      </div>
      <div  class="n-c">
        <p>Neighborhood:</p> <input class="i-n-c" type="text">
        <p>Club if applicable:</p> <input class="i-n-c" type="text">
      </div>

      <input type="submit" id="b-submit" class="hvr-fade" value= "Submit">
    </form>
  </div>
</template>

<script>


export default {
  name: 'UserRegistration',
  props: {
    msg: String,
  },
}
</script>
<style scoped>
  input {
    background: none;
    border: 1px solid #fffcf7;
    border-radius: 5px;
  }
  form {
    background: #738290;
    color: #fffcf7;
    margin: 0 10vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 1px black solid;
    -webkit-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    -moz-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
  }
  h2 {
    font-family: 'Raleway', sans-serif;
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95vh;
  }
  #b-submit {
    margin: 5px 10vw;
    height: 2em;
    background: none;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
  }
  #email-and-password{
    display: flex;
    flex-grow: 1;
  }
  #name{
    display: flex;
    flex-grow: 1;
  }
  #password{
    color: #fffcf7;
  }
  #r-password{
    color: #fffcf7;
  }
  .n-c {
    display: flex;
    margin: 12px 5px;
  }
  .i-name{
    margin: 12px 5px;
    flex: 1;
  }
  .i-n-c{
    flex: 1;
    margin: 12px 5px;
  }
  .fname,.lname{
    margin-right: 5px;
  }
  .e-p {
    flex: 1;
    margin: 12px 5px;
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
