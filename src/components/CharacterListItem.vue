<template>
  <div>
      <li v-on:click="handleClick">{{ character.name }}</li>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
    name: 'character-list-item',
    props: ['character'],
    methods: {
        handleClick() {
            eventBus.$emit('character-selected', this.character)
            console.log('character', this.character);
        }
    }

}
</script>

<style>

</style>