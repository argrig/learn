<template lang="pug">
  .container
    h2(v-if="typeof(s.problems[id]) !== 'undefined'") {{s.problems[id].name}}
    h2(v-else) Ждем данных 
      span.fa.fa-refresh.fa-spin
</template>

<script>
  module.exports = {
    mounted() {
    },
    data:function() {
      return {
        s: window.s,
        id: this.$route.params.id
      }
    },
    methods: {
    }
  }
</script>
