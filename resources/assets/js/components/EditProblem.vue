<template lang="pug">
div
  h1 Тест рендеринга Mathjax
  textarea(rows="5" cols="50" label="mathjaxTest" v-model="mathjaxSrc")
  button(type="button" label="отобразить" @click="this.render") Отобразить
  div(ref="rendered" v-html="mathjaxSrc")
</template>

<script>
  module.exports = {
    mounted() {
      console.log('Problem editor mounted...')
    },
    data:function(){
      return {
        mathjaxSrc: "$\\int f(x)$"
      }
    },
    methods: {
      render: function(event) {
        console.log("render executed..."+this.$refs.rendered.innerHTML) ;
        console.log((window.MathJax) ? "MJ initialized" : "NO") ;
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.rendered]);
      }
    }
  }
</script>
<style scoped>
.tmp{
  text-align: center ;
}
</style>
