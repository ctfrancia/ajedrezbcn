<template>
  <div class="container">
    <h1>Create A Tournament</h1>
    <form action="submit">
      <p>Name of Tournament:</p><input id="t-name" type="text" placeholder="">
      <div id="daySelection">
        <!-- TODO: conditionally render depending on radio box selected -->
        <div class="o-m-day">
          <div id="oneDay">
            <p>One day?</p>
              <input 
              v-model="selected" 
              type="radio" 
              name="oneDay" 
              id="oneDay" 
              class="r-button" 
              value="onlyOneDay"> 
          </div>
          <div id="multipleDays">
            <p>Multiple days?</p> 
              <input 
              v-model="selected" 
              type="radio" 
              name="multDays" 
              id="multDays" 
              class="r-button" 
              value="multipleDays">
          </div>
        </div>
        <!-- the div where the conditional render will be rendered -->
        <div>
          <!-- multiple days -->
          <div v-if="selected === 'multipleDays'" id="ta-multDays">
            <input v-model="numOfDays" type="number" name="" id="" placeholder="¿Cuantos días?">
            <div v-bind:key="day" v-for="day in numOfDays">
              <datePicker></datePicker>
            </div>
            <textarea  rows="10" cols="80" name="" type="text"
            placeholder="Please enter the dates as following dd/mm/yyyy @24h time, example:
            25/12/2020 @21h30
            26/12/2020 @07h
            27/12/2020 @22h
            31/12/2020 @15h15
            01/01/2020 @16h30
            02/01/2020 @21h30" />
          </div>
          <!-- one day -->
          <div v-if="selected === 'onlyOneDay'" id="i-oneDay">
            <datePicker></datePicker>
            <input type="text" name=""  placeholder="format dd/mm/yyyy @time for example: 25/12/2020 @21h30">
          </div>
        </div>
      </div> 
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
        <div id="pNumber2">
          <p>Re-enter Organizer's Phone Number:</p><input class="i-number" type="text">
        </div>
        <div id="eMail2">
          <p>Re-enter Organizer's Email Address:</p><input class="i-email" type="text">
        </div>
      </div>
      <div class="upload">
        <p> Upload the file for the Tournament (if applicable)</p>
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
// import { Datetime } from 'vue-datetime';
// import { Settings } from 'luxon'
// import 'vue-datetime/dist/vue-datetime.css'
// Settings.defaultLocale = 'es'

  // import 'bootstrap/dist/css/bootstrap.css';
  // import datePicker from 'vue-bootstrap-datetimepicker';
  // import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

// Vue.use(Datetime);
// import VueDatepickerLocal from 'vue/datepicker/local';
import datePicker from './DatePickerComponent';

export default {
  name: 'CreateTournamentForm',
  data: function(e) {
    return {
      selected: String,
      numOfDays: Number,
    }
  },
  components: {
    datePicker, 
  }
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
    align-self: center;
    margin: 0 10vw;
    width: 100%;
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
  /* #ta-multDays, #i-oneDay{
    display: none;
  } */
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
  #daySelection{
    display:flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
  #oneDay, #multipleDays{
    margin: 1em;
    display:flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
  .container {
    display:flex;
    flex-direction: column;
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
    color: #dd988c;
  }
  .upload{
    /* margin-top: 10px; */
    margin: 5px 20vw;
  }
  .o-m-day{
    display: flex;
    margin: 5px 20vw;
    align-content: center;
  }
  .r-button{
    
  }
</style>

