<template>
  <main>
    <FormBoks />
  </main>
</template>

<script>
import FormBoks from '../components/BoksForm.vue'

export default {
  components: {
    FormBoks,
  },
}
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url("stortinget.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>