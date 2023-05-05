<script>
import SingleCard from './SingleCard.vue';

    export default{
        name:"MainComp",
        components: {
            SingleCard 
        }
    }
</script>
<template>
    <div class="cont-black">
        <h2>Found tot Card</h2>
    </div>
    <div>
          <SingleCard/>
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
   
</style>