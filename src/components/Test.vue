<template>
  <span>{{ message }}</span>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Hola!'
      }
    },
    created () {
      this.message = 'Chau!'
    }
  }
</script>