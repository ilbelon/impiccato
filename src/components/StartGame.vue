<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/gameStore'

const store = useGameStore()
const playerName = ref('')

const startGame = () => {
  store.startGame(playerName.value)
}
</script>

<template>
  <div>
    <input v-model="playerName" placeholder="Enter player name" />
    <button @click="startGame">Start Game</button>
  </div>
</template>
