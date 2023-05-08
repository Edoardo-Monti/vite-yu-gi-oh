<script>
import {store} from '../store'

export default{
    name:"Search",
    data(){
        return{
            store
        }
    },
    methods:{

    }
    
}
</script>
<template>
    <div class="m-3">
        <select v-model="store.searchInput" name="type" id="caryte">
            <option value=""></option>
            <option v-for="(elem, index) in store.arrayType" :value="elem">{{ elem }}</option>
        </select>
        <button @click="$emit('nameEmit')">Cerca</button>
    </div>
</template>
<style lang="scss" scoped>

</style>