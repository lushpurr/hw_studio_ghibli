<template>
  <div v-if="film" id="film-detail">
      <h3>{{ film.title }}</h3>
      <p>{{ film.release_date }}</p>
  </div>
</template>

<script>
export default {
    name: 'film-detail',
    props: ['film']

}
</script>

<style>

</style>