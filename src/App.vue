<script setup>
import GameState from './components/GameState.vue'
</script>

<template>
  <header>
    <h1>Impiccato</h1>
  </header>

  <main>
    <Suspense>
      <GameState />
    </Suspense>
  </main>
</template>
