<script >
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';



export default{
  name: 'App',
  components: {
    HeaderComp,
    MainComp
}
}

</script>

<template>
  <HeaderComp/>
  <div class="background-orange">
    <div class="second-bg">
      <MainComp/>
    </div>
  </div>
</template>

<style lang="scss">
@use "./style/main.scss";

.background-orange{
  background-color: orange;
  height: 100vh;
  display: flex;
  .second-bg{
    width: 80%;
    margin: 0 auto;
    height: 500px;
    margin-top: 50px;
    background-color: white;
  }
}
</style>
