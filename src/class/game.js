class HangmanGame {
  constructor(word, maxLives) {
    this.word = word
    this.maxLives = maxLives
    this.lives = maxLives
    this.guessedLetters = new Set()
  }

  guess(letter) {
    this.guessedLetters.add(letter)

    if (!this.word.includes(letter)) {
      this.lives--
    }
  }

  isGameOver() {
    return this.isWordGuessed() || this.lives === 0
  }

  isWordGuessed() {
    return this.word.split('').every((letter) => this.guessedLetters.has(letter))
  }
}

export default HangmanGame
