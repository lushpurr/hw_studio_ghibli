<template>
<div>
    <h2>Watch List</h2>

<p v-for="film in watchList" :key="film.id">{{ film.title }}</p>  
</div>

</template>

<script>
export default {
    name: 'watch-list',
    props: ['watchList']

}
</script>

<style>

</style>