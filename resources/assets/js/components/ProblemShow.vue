<template lang="pug">
  .container
    h2(v-if="typeof(s.problems[id]) !== 'undefined'") {{s.problems[id].name}}
    h2(v-else) Ждем данных &nbsp;
      span.fa.fa-refresh.fa-spin
    .container(style="font-size:2em" ref="pText" v-if="this.pRender" v-html="this.pRender.A" @change="this.jax" @click="this.jax") 
    .container(v-else) Генерируем задачу &nbsp;
      span.fa.fa-refresh.fa-spin
</template>

<script>
  module.exports = {
    mounted() {
      this.got = setInterval(this.getProblem, 500) ;
    },
    data:function() {
      return {
        got: "",
        s: window.s,
        id: this.$route.params.id,
        rendered: {},
      }
    },
    computed: {
      pRender: function() {
        return (this.s.problems && this.s.problems[this.id] && this.s.problems[this.id].pRender) 
          ? this.s.problems[this.id].pRender : null ;
      }
    },
    methods: {
      jax: function(){
        console.log("JAXING!") ;
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.pText]);
      },
      dbId: function() { return s.problems[this.id].id; },
      getProblem: function () {
        if(this.s.problems.length > 0 && typeof(this.id) !== 'undefined') {
          url = "/problem/render/"+this.dbId() ;
          this.axios.post(url).then(response => {
            let data = response.data ;
            if(data["status"] == "ok") {
              //console.log(JSON.stringify(data)) ;
              delete data["status"] ;
              this.$set(this.s.problems[this.id],'pData', data) ;
              this.$set(s.problems[this.id],'pRender', MyRender.render(data)) ;
              console.log(JSON.stringify(this.pRender)) ;
            }
            else{
              console.log("ERROR: " + JSON.stringify(data)) ;
            }
          }).catch(error =>{console.log("ERROR "+url + ": "+error)}) ; 
          clearInterval(this.got) ;
        }
        else {
          console.log("Данных пока нет ...");
        }
      }
    }
  }
</script>
