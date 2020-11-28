<template>
  <div v-if="character" id="character-detail">
      <h3>Name:{{ character.name }}</h3>
      <p>Age:{{ character.age}}</p>
      <p>Hair Colour:{{ character.hair_color}}</p>
        Appears in:
      <ul>
        <li v-for="film in films" :film="film" :key="film.id">{{ film.title}}</li></ul>
      </div>
  </div>
</template>

<script>
import FilmsList from './FilmsList.vue'
export default {
    name: 'character-detail',
    props: ['character'],
    data(){
      return {
        films: []
      }
    },
    components: {
      'films-list': FilmsList
    },
    mounted() {
      this.getFilms()
    },
    watch: {
      character: function(){
        this.getFilms()
      }
    },

    methods: {
      getFilms(){
        const filmPromises = this.character.films.map((film) => {
          return fetch(film).then(res => res.json());
        })
        Promise.all(filmPromises)
        .then((data) => {
          this.films = data;
          console.log(this.films);
        })
      }
    }

}
</script>

<style>

</style>