<script >
import axios from 'axios';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import SearchComp from './components/SearchComp.vue';
import Spinner from './components/Spinner.vue';
import {store} from './store';






export default{
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    SearchComp,
    Spinner
},
  data(){
    return{
      store
    }
  },
  created(){
    // this.apiYugi()
  },
  computed:{
    apiYugi(){
    store.spinner = true
      if(store.searchInput == ""){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100& offset=1').then((res => {
          store.spinner = false
          const datiApi = res.data.data

          this.store.arrayCarte = datiApi
          console.log(this.store.arrayCarte)


          for (let i = 0; i < datiApi.length; i++) {
             const datiType = res.data.data[i].type

             if(!store.arrayType.includes(datiType)){
               store.arrayType.push(datiType)
               //console.log(store.arrayType)
             }

      
          }
        }))
      }else{
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100& offset=1&type=${store.searchInput}`).then((res => {
          store.spinner = false
          const datiApi = res.data.data

          this.store.arrayCarte = datiApi
          console.log(this.store.arrayCarte)


          for (let i = 0; i < datiApi.length; i++) {
             const datiType = res.data.data[i].type

             if(!store.arrayType.includes(datiType)){
               store.arrayType.push(datiType)
               //console.log(store.arrayType)
             }

      
          }
        }))
      }
      
    }

  
  },
  methods:{

  }

}

</script>

<template>
  <HeaderComp/>
  <div class="first-bg">
    <div class="second-bg">
      <SearchComp @nameEmit="apiYugi"/>
      <Spinner v-if="store.spinner "/>
      <div v-else class="third-bg">
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
