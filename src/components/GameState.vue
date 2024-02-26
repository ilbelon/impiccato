<script setup>
import { useGameStore } from '../stores/gameStore'
import StartGame from './StartGame.vue'
import GameOngoing from './GameOngoing.vue'
import GameEnd from './GameEnd.vue'
import LanguageSelection from './LanguageSelection.vue'
import DifficultSelection from './DifficultSelection.vue'

const store = useGameStore();
await store.init();
</script>

<template>
  <div>
    <div v-if="!store.isGameStarted">
      <DifficultSelection />
      <LanguageSelection />
      <StartGame />
    </div>
    <div v-else>
      <GameOngoing />
      <GameEnd v-if="store.isGameOver" />
    </div>
  </div>
</template>
