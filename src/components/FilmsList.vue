<template>
  <div>
      <p>Film List</p>
      <list-item v-for="film in films" :film="film" :key="film.id"></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
    name: 'films-list',
    props: ['films'],
    components: {
        "list-item" : ListItem
    }

}
</script>

<style>

</style>