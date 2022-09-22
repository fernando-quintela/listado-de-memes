<template>
 <div class="container">
  <ListaMemes/>
 </div>
</template>

<script>
import {useStore} from "vuex";
import ListaMemes from "@/components/ListaMemes.vue";
export default {
  
  name: 'App',
  components: {
    ListaMemes
    
  },

  setup() {
   const store = useStore();

   return {
    store
   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
