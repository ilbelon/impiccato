<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/gameStore'

const letter = ref('')
const store = useGameStore()

function makeLetterGuess() {
  store.guessLetter(letter.value)
  letter.value = ''
}
</script>

<template>
  <div>
    <div>
      <label for="letterInput"
        ><strong>{{ store.playerName }}</strong> che lettera vuoi inserire?</label
      >
      <br />
      <input id="letterInput" v-model="letter" @keyup.enter="makeLetterGuess" maxlength="1" />
      <br />
      <button @click="makeLetterGuess">Indovina</button>
      <div>Lettere provate: {{ store.guessedLetters }}</div>
    </div>
    <div>Vite: {{ store.remainingLife }}</div>
    <div v-if="store.isGameOver">parola: {{ store.word }}</div>
    <div v-else>parola: {{ store.maskedWordSpaced }}</div>
  </div>
</template>
