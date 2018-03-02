<template>
  <img :src="privateState.imgSrc" alt="Logo">
</template>

<script>
import img from "../assets/logo.png"
import s from "../store"

export default {
  name: "Logo",
  data() {
    return {
      privateState: {
        imgSrc: img
      },
      sharedState: s.state
    }
  },
  mounted() {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
