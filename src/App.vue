<template>
  <div>
    <div class='main-container'>

      <ghibli-header title="Studio Ghibli Information" />
       <h1>Characters</h1>
       <label for="character_select">Select a Character</label>
        <select id="character_select" v-model="selectedCharacter">
          <option disabled value="">Select a character</option>
          <option v-for="(character, index) in characters" :key="index" :value="character">{{character.name}}</option>
        </select>

        <character-detail :character="selectedCharacter"></character-detail> 
        <watch-list :watchList="watchList"></watch-list>
    </div>
  </div> 
  
</template>

<script>
// import FilmDetail from './components/FilmDetail.vue';
// import FilmsList from './components/FilmsList.vue';
import GhibliHeader from './components/GhibliHeader.vue';
import CharacterDetail from './components/CharacterDetail.vue';
import CharactersList from './components/CharactersList.vue';
import WatchList from './components/WatchList.vue';
import {eventBus} from './main.js'



export default {
  name: 'app',
  data() {
    return {
      characters: [],
      watchList: [],
      selectedFilm: null,
      selectedCharacter: null,

    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/people')
    .then(results => results.json())
    .then(data => this.characters = data)

    eventBus.$on('character-selected', character => (this.selectedCharacter = character));
    eventBus.$on('film-selected', film => (this.selectedFilm = film));
  },
  components:{
    "characters-list": CharactersList,
    "character-detail": CharacterDetail,
    "ghibli-header": GhibliHeader,
    "watch-list": WatchList
 
  },
  methods:{
        addToWatchList: function(selectedFilm) {
        this.watchList.push(this.selectedFilm)
      }

}}
</script>

<style>
body{
  font-family: futura;

  background:lightskyblue; 
 
   
}


</style>