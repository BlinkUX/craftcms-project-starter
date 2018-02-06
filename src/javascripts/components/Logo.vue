<template>
  <img alt="Logo" :src="privateState.imgSrc">
</template>

<script>
import img from "../../assets/logo.png"
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
<style lang="scss" scoped>

</style>
