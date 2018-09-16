<template lang="pug">
  .container(v-html="myHTML" ref="myShowJax")
</template>

<script>
  module.exports = {
    mounted() {
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.myShowJax]);
    },
    data: function() {
      return {
        fontSize: 2,
      }
    },
    props:['myHTML'],
    watch: {
      myHTML: function() {
        console.log("INNER CHANGED!") ;
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.myShowJax]);
      }
    }
  }
</script>
