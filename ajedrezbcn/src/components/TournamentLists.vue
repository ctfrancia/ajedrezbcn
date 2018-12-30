<template>
  
  <div class="container"> 
    <div class="tournament-list">
      <div class="host">
        <p>Hosting Club:</p> <p>Congres</p>
      </div>
      <div class="location">
        <p>Location:</p> <p>123 cool st.</p>
      </div>
      <div class="fee">
        <p>Fee:</p> <p>0€</p>
      </div>
      <div class="date">
        <p>Date(s):</p>
        <div class="date-list">
          <p>23-Dec-18: @13 </p>
          <p>24-Dec-18: @13 </p>
          <p>25-Dec-18: @13 </p>
          <p>26-Dec-18: @13 </p>
          <p>27-Dec-18: @13 </p>
          <p>28-Dec-18: @13 </p>
        </div>
      </div>
      <div class="summary">
        <p>Summary:</p>
        <p>Here will be a summary of the chess tournament that will spart the interest
          of the people that want to come and from there people will know if they want to come.
          I know I can fill this part with lorum ipsum but I don't care for it right now as I really want to type
          this nonsense text.
        </p>
      </div>
      <a href=""><p>For more information click here</p></a>
    </div>
    <div class="tournament-list">
      <div class="host">
        <p>Hosting Club:</p> <p>Congres</p>
      </div>
      <div class="location">
        <p>Location:</p> <p>123 cool st.</p>
      </div>
      <div class="fee">
        <p>Fee:</p> <p>0€</p>
      </div>
      <div class="date">
        <p>Date(s):</p>
        <div class="date-list">
          <p>23-Dec-18: @13 </p>
          <p>24-Dec-18: @13 </p>
          <p>25-Dec-18: @13 </p>
          <p>26-Dec-18: @13 </p>
          <p>27-Dec-18: @13 </p>
          <p>28-Dec-18: @13 </p>
        </div>
      </div>
      <div class="summary">
        <p>Summary:</p>
        <p>Here will be a summary of the chess tournament that will spart the interest
          of the people that want to come and from there people will know if they want to come.
          I know I can fill this part with lorum ipsum but I don't care for it right now as I really want to type
          this nonsense text.
        </p>
      </div>
      <a href=""><p>For more information click here</p></a>
    </div>
    <div class="tournament-list">
      <div class="host">
        <p>Hosting Club:</p> <p>Congres</p>
      </div>
      <div class="location">
        <p>Location:</p> <p>123 cool st.</p>
      </div>
      <div class="fee">
        <p>Fee:</p> <p>0€</p>
      </div>
      <div class="date">
        <p>Date(s):</p>
        <div class="date-list">
          <p>23-Dec-18: @13 </p>
          <p>24-Dec-18: @13 </p>
          <p>25-Dec-18: @13 </p>
          <p>26-Dec-18: @13 </p>
          <p>27-Dec-18: @13 </p>
          <p>28-Dec-18: @13 </p>
        </div>
      </div>
      <div class="summary">
        <p>Summary:</p>
        <p>Here will be a summary of the chess tournament that will spart the interest
          of the people that want to come and from there people will know if they want to come.
          I know I can fill this part with lorum ipsum but I don't care for it right now as I really want to type
          this nonsense text.
        </p>
      </div>
      <a href=""><p>For more information click here</p></a>
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
  }
  .tournament-list{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 33vw;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    justify-content: space-between;
  }
  .host,
  .location,
  .date,
  .fee,
  .summary,
  a{
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


</style>


