<script setup>
import HelloWorld from './home/HelloWorld.vue'
import HomeComponents from './home/HomeComponents.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/free-icon.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="AI OCR TEST" />
    </div>
  </header>

  <main>
    <HomeComponents />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
