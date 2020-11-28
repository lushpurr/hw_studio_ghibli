<template>
  <div>
      <character-list-item v-for="(character) in characters" :character="character" :key="character.id"></character-list-item>
  </div>
</template>

<script>
import CharacterListItem from './CharacterListItem.vue'

export default {
    name: 'characters-list',
    props: ['characters'],
    components: {
        "character-list-item" : CharacterListItem
    }

}
</script>

<style>

</style>