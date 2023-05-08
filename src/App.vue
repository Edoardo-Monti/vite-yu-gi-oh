<script >
import axios from 'axios';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import SearchComp from './components/SearchComp.vue';
import {store} from './store';






export default{
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    SearchComp
},
  data(){
    return{
      store
    }
  },
  created(){
    this.apiYugi()
  },
  methods:{
    apiYugi(){
    //   axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=1')
    //   .then((res) =>{
    //     console.log(res.data.data[0].name)

    //     const datiApi = res.data.data

    //     this.store.arrayCarte = datiApi
    //     console.log(this.store.arrayCarte)


    //     for (let i = 0; i < datiApi.length; i++) {
    //       const datiType = res.data.data[i].type

    //       if(!store.arrayType.includes(datiType)){
    //         store.arrayType.push(datiType)
    //         //console.log(store.arrayType)
    //       }

          
    //     }
    //   })
    // }
      if(store.searchInput == ""){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100& offset=1').then((res => {
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

  }

}

</script>

<template>
  <HeaderComp/>
  <div class="first-bg">
    <div class="second-bg">
      <SearchComp @nameEmit="apiYugi"/>
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
