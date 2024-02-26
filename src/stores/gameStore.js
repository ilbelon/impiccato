import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'
import { getRandomWord, getLanguages } from '../function/getRandomWord'

export const useGameStore = defineStore('game', () => {
  const isGameOver = ref(false);
  const isGameWon = ref(false);

  const word = ref('');
  const guessedLetters = ref([]);
  const attempts = ref(0);
  const maxAttemptsDefault = 6;
  const maxAttempts = ref(maxAttemptsDefault);

  const languages = ref([])
  languages.value.push('en');
  const selectedLanguage = ref('it')
  const playerName = ref('')
  const wordLength = ref(6);

  async function startGame(name) {
    playerName.value = name
    word.value = await getRandomWord(selectedLanguage.value, wordLength.value);
    word.value = word.value.toLowerCase()
    guessedLetters.value = []
    attempts.value = 0
    isGameOver.value = false
    isGameWon.value = false
  }

  function guessLetter(letter) {
    const normalizedLetter = letter.toLowerCase()

    if (guessedLetters.value.includes(normalizedLetter)) {
      alert('Sei un pinna gialla hai già provato questa lettera!');
      return;
    }

    guessedLetters.value.push(normalizedLetter)

    if (!word.value.includes(normalizedLetter)) {
      attempts.value++

      if (attempts.value >= maxAttempts.value) {
        isGameOver.value = true
      }
    } else if (maskedWord.value.trim() === word.value) {
      isGameOver.value = true
      isGameWon.value = true
    }
  }

  const isGameStarted = computed(() => word.value !== '')
  const maskedWord = computed(() => {
    if (!word.value) return ''
    return word.value
      .split('')
      .map((letter) => (guessedLetters.value.includes(letter) ? letter : '_'))
      .join('')
  })

  const maskedWordSpaced = computed(() => {
    if (!word.value) return ''
    return word.value
      .split('')
      .map((letter) => (guessedLetters.value.includes(letter) ? letter+' ' : '_ '))
      .join('')
  })

  const remainingLife = computed(() => maxAttempts.value - attempts.value)

  function resetGame() {
    word.value = ''
    guessedLetters.value = []
    attempts.value = 0
    isGameOver.value = false
    isGameWon.value = false
  }

  function changeLanguage(lang) {
    selectedLanguage.value = lang;
  }

  function changeWordLength(length) {
    wordLength.value = length;
  } 

  function changemaxAttempts(max) {  
    maxAttempts.value = max;
  }

  ;(async function () {
    try {
      let data = await getLanguages();
      languages.value.push(...data);
      console.log('languages', languages.value);
    } catch (error) {
      console.error(error)
    }
  })()

  return {
    isGameStarted,
    isGameOver,
    isGameWon,
    playerName,
    word,
    guessedLetters,
    attempts,
    maxAttempts,
    startGame,
    guessLetter,
    maskedWordSpaced,
    resetGame,
    remainingLife,
    languages,
    selectedLanguage,
    changeLanguage,
    changeWordLength,
    changemaxAttempts,
    wordLength
  }
})
