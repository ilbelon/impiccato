<script setup>
import { useGameStore } from '../stores/gameStore';
const store = useGameStore();
</script>
<template>
  <div>
    <h3>Lunghezza Parola (0=casuale):</h3>
    <input type="number" v-model="store.wordLength" >
    <h3>Numero tentativi </h3>
    <input type="number" v-model="store.maxAttempts" >
  </div>
</template>