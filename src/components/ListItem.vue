<template>
  <div>
      <h3>Film List Item</h3>
      <li>{{ film.title }}</li>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
    name: 'list-item',
    props: ['film'],
    methods: {
        handleClick() {
            eventBus.$emit('film-selected', this.film)
            console.log('film', this.film);
        }
    }

}
</script>

<style>

</style>