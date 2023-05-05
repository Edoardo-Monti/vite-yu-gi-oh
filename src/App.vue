<script >
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';




export default{
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    
}
}

</script>

<template>
  <HeaderComp/>
  <div class="first-bg">
    <div class="second-bg">
      <div class="third-bg">
        <div >
          <MainComp/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./style/main.scss";

.first-bg{
  background-color: orange;
  // height: 100vh;
  display: flex;
  justify-content: center;
  .second-bg{
    width: 80%;
    margin: 0 auto;
    margin: 50px;
    // height: 500px;
    margin-top: 50px;
    background-color: white;
    .third-bg{
      margin: 50px;
      
    }
    
  }
}
</style>
