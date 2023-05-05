<script >
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import {store} from './store'




export default{
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    
  },
  data(){
    return{
      store
    }
  },
  created(){
    
  },
  methods:{
    apiYugi(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=1').then((response) =>{
        console.log(response.data.name)
      })
    }
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
