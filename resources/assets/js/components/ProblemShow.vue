<template lang="pug">
  .container
    h2(v-if="typeof(s.problems[id]) !== 'undefined'") {{s.problems[id].name}} &nbsp;
      button.fa.fa-search-plus(@click="chFontSize(0.1)")
      | &nbsp;
      button.fa.fa-search-minus(@click="chFontSize(-0.1)") 
    h2(v-else) Ждем данных &nbsp;
      span.fa.fa-refresh.fa-spin
    show-jax(ref="mainShow" :style="myStyleObj" v-if="this.pRender" :myHTML="this.pRender.A" @can-jax="this.jax")
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
        fs: 2,
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
      },
      myStyleObj: function() {
        return {fontSize: this.fs + "em"} ;
      }
    },
    methods: {
      chFontSize: function(size) {
        this.fs+=size ;
        console.log(this.fs) ;
      },
      jax: function(){
        console.log("JAXING!") ;
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.mainShow]);
      },
      dbId: function() { return s.problems[this.id].id; },
      getProblem: function () {
        //console.log("ГЕНЕРИРУЕМ...") ;
        if(this.s.problems.length > 0 && typeof(this.id) !== 'undefined') {
          url = "/problem/render/"+this.dbId() ;
          this.axios.post(url).then(response => {
            let data = response.data ;
            if(data["status"] == "ok") {
              //console.log(JSON.stringify(data)) ;
              delete data["status"] ;
              this.$set(this.s.problems[this.id],'pData', data) ;
              this.$set(s.problems[this.id],'pRender', MyRender.render(data)) ;
              //this.$refs.mainShow.$emit('can-jax') ;
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
