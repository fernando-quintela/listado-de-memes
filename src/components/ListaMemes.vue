<template>
  <h1>{{titulo}}</h1>
  <div class="total-show">
    <span>Cantidad de Memes</span>
   <select @change="changeTotal">
    <option value="">All</option>
    <option value="3">3</option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>

   </select>
  </div>
 <div class="row">
   <template v-for="meme in memes" :key="meme.id">
    <Meme  :lol="meme"/>
   </template>
 </div>

</template>

<script>
import { onMounted , computed} from "vue";
import { useStore } from "vuex";
import Meme from "@/components/Meme.vue";
export default {
  components: {
    Meme,
  },

  setup() {
    const store = useStore();
    const memes = computed(() =>store.state.memes);

    onMounted(() => {
      store.dispatch("getMemes")
    });

     const changeTotal = (e) => {
      store.dispatch("getMemes", {
        total: e.target.value
      })
     };

    return {
      titulo: store.state.title,
      memes,
      changeTotal
    }
  }

}
</script>

<style scoped>
h1 {
  text-align: center;
}

.total-show {
display: flex;
justify-content: flex-end;
margin-bottom: 7px;
padding: 6px;

}

span {
  padding: 5px;
  margin-right: 15px;
  font-weight: 600;
  font-size: 17px;
}



</style>