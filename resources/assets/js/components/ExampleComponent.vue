<template lang="pug">
  .container
    input(v-model="msg" placeholder="edit me")
    p Message is {{ msg }}
</template>

<script>
  module.exports = {
    mounted() {
      console.log('Component mounted.')
    },
    props:['msg'],
  }
</script>
