<template>
  <Logo></Logo>
</template>

<script>
  import Logo from "./components/Logo"

  export default {
    name: "app",
    data: () => {
      return {
        showMenu: false,
      }
    },
    components: {
      Logo,
    },
  }
</script>

<style lang="scss">

</style>
