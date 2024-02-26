<script setup>
import { useGameStore } from '../stores/gameStore';
const store = useGameStore();
function selectLang(e) {
  console.log(e.target.value);
  store.changeLanguage(e.target.value);
}
</script>
<template>
  <div>
    <h2>Lingue</h2>
    <div v-if="store.languages.length > 0">
      <li v-for="language in languages" :key="language.id">{{ language.name }}</li>
      <span v-for="language in store.languages" :key="language">
        <input type="radio" name="" :value="language" @change="selectLang"/> 
        <label for="">{{ language }}</label>
      </span>
    </div>

    <p v-else>Si giocherà in italiano perché non trovo le lingue</p>
  </div>
</template>
