<template>
  
  <div class="container"> 
    <div class="tournament-list">
      <div class="host">
        <p class="p-static">Hosting Club:</p> <p>Congres</p>
      </div>
      <div class="location">
        <p class="p-static">Location:</p> <p>123 cool st.</p>
      </div>
      <div class="fee">
        <p class="p-static">Fee:</p> <strong>0€</strong>
      </div>
      <div class="date">
        <p class="p-static">Date(s):</p>
        <div class="date-list">
          <!-- need a for loop over the dates to be shown -->
          <p>23-Dec-18: @13 </p>
          <p>24-Dec-18: @13 </p>
          <p>25-Dec-18: @13 </p>
          <p>26-Dec-18: @13 </p>
          <p>27-Dec-18: @13 </p>
          <p>28-Dec-18: @13 </p>
        </div>
      </div>
      <div class="summary">
        <p class="p-static">Summary:</p>
        <p>Here will be a summary of the chess tournament that will spart the interest
          of the people that want to come and from there people will know if they want to come.
          I know I can fill this part with lorum ipsum but I don't care for it right now as I really want to type
          this nonsense text.
        </p>
      </div>
      <a href="" class="hvr-grow"><p>For more information click here</p></a>
    </div>

  </div>
    

</template>
<script>
export default {
  name: 'TournamentLists'
  //this component will be receiving props
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-basis: 30%;
  }
  a{
    margin: 5px;
    text-align: center;
    color: #738290;
    
  }
  .tournament-list{
    display: flex;
    flex-direction: column;
    width: 30vw;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    justify-content: space-between;
    -webkit-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    -moz-box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
    box-shadow: 6px 8px 8px -6px rgba(0,0,0,1);
  }
  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.2s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .host,
  .location,
  .date,
  .fee,
  .summary{
    display: flex;
    padding-left: 10px;
    margin: 5px;
  }
  .date-list{
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
  p{
    margin: 0px;
  }
  .p-static{
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    margin-right: 5px;
  }

</style>


