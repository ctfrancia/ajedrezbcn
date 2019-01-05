<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <form action="submit">
      <div id="basic-c-info">
        <p>Name of Club:</p><input class="u-input" type="text" name="" id="">
        <p>Location of Club:</p><input class="u-input" type="text" name="" id="">
      </div>
      <div id="c-org-info">

        <div id="club-o">
          <p>Name of Club Organizer</p><input class="u-input" type="text" name="" id="">
        </div>
        <div id="p-number">
          <p>Club Phone Number</p>
          <input class="u-input" type="tel" patter="[0-0]{3}-[0-9]{3}-[0-9]{3}"
          name="phoneNum" id="" placeholder="format: 123-456-789">
          <p>Retype Club Phone Number</p><input class="u-input" type="tel" name="phoneNum" id="" placeholder="format: 123-456-789">
        </div>

        <div id="c-email">
          <p>Club Email</p><input class="u-input" type="email" name="" id="">
          <p>Retype Club Email</p><input class="u-input" type="email" name="" id="">
        </div>
      </div>
      <div id="lang-section">
        <p>Idiomas Hablados en el Club:</p>
        <!-- :key is short for v-bind:key is short for v-for -->
          <div class="l-container" :key="index"  v-for="(language, index) in languages" >
            <input
            v-model="checkedLanguages" 
            class="c-box" 
            type="checkbox" 
            name="language" 
            :value="language.text">
            <p>{{language.text}}</p>
          </div>
      </div>
      <div id="extras">
        <p>Amenidades Extra con el Club:</p>
        <!-- :key is short for v-bind:key  is short for v-for -->
        <div class="e-container" :key="index" v-for="(extra, index) in extras">
          <input 
          v-model="checkedExtras" 
          class="c-box" 
          type="checkbox" 
          name="extras" 
          :value="extra.text">
          <p>{{extra.text}}</p>
        </div>
      </div>
      <textarea rows="10" cols="80" id="location-description" type="text" 
      placeholder= "Please enter any additional information about your club here">
      </textarea>
      <div id="website">
        <p class="p-c-w">Club's Website: </p><input class="u-input c-box rest-of-space" type="text" name="" id="">
      </div>
      <input class="b-submit hvr-pop" type="submit" value="Submit">
    </form>
    
  </div>
  
</template>

<script>

export default {
  name: 'ClubRegistration',
  props: {
    msg: String,
  },
  data: function () {
    return {
      checkedLanguages: [],
      checkedExtras: [],
    }
  },
  // computed here is what is accessing the Vuex store
  computed: {
    languages(){
      return this.$store.state.languages;
    },
    extras(){
      return this.$store.state.extras;
    },
    //setters are needed for the ones below
    // checkedLanguages(){
    //   return this.$store.state.checkedLanguages;
    // },
    // checkedExtras(){
    //   return this.$store.state.checkedExtras;
    // }

  }
}
</script>

<style scoped>
  .container{
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
  }
  p{
    margin: 0px 10px; 
  }
  form{
    margin: 0 10vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 1px black solid;
    -webkit-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    -moz-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
  }
  textarea{
    resize: none;
    width: inherit;
  }
  .u-input {
    width:10vmax;
    margin:13px 2px;
    flex-wrap: wrap;
    border: none;
    background: none;
    font-size: .9em;
  } 
  .c-box{
    margin: 10px;
  }
  #basic-c-info{
    display: flex;
    align-self: center;
  }
  #club-o{
    display: flex;
    flex-direction: column;
    flex-grow:1;
  }
  #c-org-info{
    display:flex;
  }
  #p-number{
    display: flex;
    flex-direction: column;
    flex-grow:2;
  }
  #c-email{
    display:flex;
    flex-direction: column;
    flex-grow:2;
  }
  #lang-section{
    display:flex;
  }
  #extras{
    display:flex;
    text-align: center;
    vertical-align: middle;
  }
  #website{
    display: flex;
  }
  .b-submit{
    margin: 0 15vw;
    height: 3vh;
    cursor: pointer;
    border: none;
    background: none;
    font-size:.9em;
    color: #c56161
  }
  .rest-of-space{
    flex-grow:2;
  }
  @-webkit-keyframes hvr-pop {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@keyframes hvr-pop {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
.hvr-pop {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-pop:hover, .hvr-pop:focus, .hvr-pop:active {
  -webkit-animation-name: hvr-pop;
  animation-name: hvr-pop;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
.l-container, .e-container{
  display: flex;
}

</style>

