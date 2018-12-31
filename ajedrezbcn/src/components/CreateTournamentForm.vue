<template>
  <div class="container">
    <h1>Create A Tournament</h1>
    <form action="submit">
      <p>Name of Tournament:</p><input id="t-name" type="text" placeholder="A">
      <p>Location:</p><input id="location" type="text" placeholder="Write the club's address here">
      <br>
      <textarea rows="10" cols="80" id="location-description" type="text" 
      placeholder= "
      Write More about the location, should they ring when they arrive? 
      Are you above a store?
      Anything that would possibly help people find your club.">
      </textarea>
      <!-- FIXME: why aren't the inputs occupying half?  -->
      <div id="contacts">
        <div id="pNumber">
          <p>Organizer's Phone Number:</p><input class="i-number" type="text">
        </div>
        <div id="eMail">
          <p>Organizer's Email Address:</p><input class="i-email" type="text">
        </div>
      </div>
      <div class="upload">
        <p>upload file</p>
        <input type="file"
          id="avatar" name="avatar"
          accept="image/png, image/jpeg">
      </div>
      <br>
      <input class="hvr-fade" id="submit" type="submit" value="Submit">
    </form>
    <!-- -->
  </div>
</template>
<script>

export default {
  name: 'CreateTournamentForm',
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  textarea {
    resize: none;
  }
  form {
    margin: 0 10vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 1px black solid;
    -webkit-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    -moz-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
  }
  p {
    text-align: center;
  }
  #submit{
    height: 30px;
  }
  #t-name{
    margin:0 20vw;
  }
  #contacts{
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  #submit {
    font-family: 'Raleway', sans-serif;
    cursor: pointer;
    background: none;
    border: none;
    margin: 0 10vw;
    font-size: 1em;
  }
  .container {
    height: 100vh;
  }
  .i-number {
    flex: 1;
  }
  .i-email {
    flex: 1;
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

