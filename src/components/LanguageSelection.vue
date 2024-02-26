<script setup>
import { useGameStore } from '../stores/gameStore';
import { ref } from 'vue';
const store = useGameStore();
function selectLang() {
  store.changeLanguage(selection.value);
}
const selection = ref('');
</script>
<template>
  <div>
    <h2>Lingue</h2>
    <div v-if="store.languages.length > 0">
      <li v-for="language in languages" :key="language.id">{{ language.name }}</li>
      <span v-for="language in store.languages" :key="language">
        <input type="radio" name="" :value="language" @click="selectLang" v-model="selection"/>
        <label for="">{{ language }}</label>
      </span>
    </div>

    <p v-else>Si giocherà in italiano perché non trovo le lingue</p>
  </div>
</template>
