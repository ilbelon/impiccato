<script setup>
import { useGameStore } from '../stores/gameStore'

const store = useGameStore()

function resetGame() {
  store.resetGame()
}
</script>

<template>
  <div>
    <h2 v-if="store.isGameWon">Hai Vinto!</h2>
    <h2 v-else>Hai Perso!</h2>
    <button @click="resetGame">Reset Game</button>
  </div>
</template>