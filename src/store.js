import { reactive } from "vue";

export const store = reactive(
    {
        arrayCarte: [],
        arrayType: [],
      
        searchInput:"",
        spinner: false
    }
)