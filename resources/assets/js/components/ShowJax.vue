<template lang="pug">
  .container(v-html="myHTML" ref="myShowJax")
</template>

<script>
  module.exports = {
    mounted() {
      this.renderJax() ;
    },
    updated() {
      this.renderJax() ;
    },
    props:['myHTML'],
    methods: {
      renderJax: function() {
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.myShowJax]);
      }
    }
  }
</script>
