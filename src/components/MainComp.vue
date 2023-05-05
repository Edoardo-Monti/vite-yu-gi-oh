<script>
import SingleCard from './SingleCard.vue';
import {store} from '../store';

    export default{
        name:"MainComp",
        components: {
            SingleCard 
            
        },
        data(){
            return{
                store
            }
        }
    }
</script>
<template>
    <div class="cont-black">
        <h2>Le carte sono: {{store.arrayCarte.length}}</h2>
    </div>
    <div class="cardCont">
          <SingleCard v-for="(elem, index) in store.arrayCarte"
          :propsCard=elem />
    </div>
    
</template>
<style lang="scss" scoped>

.cont-black{
    height: 40px;
    background-color: black;
    h2{
        color: white;
        padding: 10px;
        font-size: 15px;
    }
}

.cardCont{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>