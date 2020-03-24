<template>
  <div id="app">
    <div class="nav">
      <p class="title"><strong>Projects</strong></p>
      <div class="nav-right">
        <span class="nav-button">Stop Service</span>
        <span class="nav-button">Restart Service</span>
        <span class="nav-button">Delete Project</span>
        <span class="nav-button">Update Project MetaData</span>
        <span class="nav-button">Create New Project</span>
      </div>
    </div>
    <div class="pro">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @media screen and (max-width: 767px){
    #app{
      font-size: 12px;
    }
    .nav-button{
      display: inline-block;
      width: 30vw;
      margin-bottom: 3px;
    }
    .nav-button:nth-child(4){
      width: 45vw;
    }
    .nav-button:nth-child(5){
      width: 45vw;
    }

  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    #app{
      font-size: 15px;
    }
    .nav-button{
      display: inline-block;
      width: 30vw;
      margin-bottom: 3px;
    }
    .nav-button:nth-child(4){
      width: 45vw;
    }
    .nav-button:nth-child(5){
      width: 45vw;
    }

  }
  @media screen and (min-width: 1025px){
    #app{
      font-size: 15px;
    }
    .nav-right{
      float: right;
      margin: 5px;
    }
    .nav-button{
      margin: 0 10px;
      padding: 5px 20px;
    }
    .title{
      float: left;
    }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 10px;
  }
  .title{
    margin: 1px;
    font-size: 18px;
  }
  .nav-right{
    color: #fff;
  }
  .nav:after{
    content: '';
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
  }
  .nav-button:nth-child(1){
    background-color: #555555;
  }
  .nav-button:nth-child(5){
    background-color: #4caf50;
  }
  .nav-button:nth-child(2){
    background-color: #4caf50;
  }
  .nav-button:nth-child(3){
    background-color: #f44336;
  }
  .nav-button:nth-child(4){
    background-color: #008cba;
  }
  .pro{
    margin: 0;
  }
</style>
