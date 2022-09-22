<template>
  <div class="col-md-4 col-6 meme">
   <p>{{lol.name}}</p>
   <img :src="lol.url" :alt="lol.name" class="fluid">
  </div>
</template>

<script>
export default {
  props: {
    lol: Object,
  }

}
</script>

<style scoped>
 .meme {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
 }

 .meme img {
  max-height: 200px;
  max-width: 185px;
 }

</style>