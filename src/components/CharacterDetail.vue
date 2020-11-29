<template>
  <div v-if="character" id="character-detail">
      <h3>Name:{{ character.name }}</h3>
      <p>Age:{{ character.age}}</p>
      <p>Hair Colour:{{ character.hair_color}}</p>
        Appears in:
      <ul> 
        <li v-for="film in films" :film="film" :key="film.id">
          <p>Title:{{ film.title}}</p>
          <button v-on:click="handleClick(selectedFilm)" if="film-selected" >Add To Watch List</button>
          <p>Director:{{ film.director }}</p>
          <p>Release Date:{{ film.release_date}}</p> 
          </li></ul>


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
    }
    ,
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
      },
      
        handleClick(){
          eventBus.$emit('film-selected', this.selectedFilm)
        }
      }

    }
</script>

<style>

</style>