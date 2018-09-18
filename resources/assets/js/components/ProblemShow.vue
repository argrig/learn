<template lang="pug">
  .container
    h2(v-if="typeof(s.problems[id]) !== 'undefined'") {{s.problems[id].name}} &nbsp;
      button.fa.fa-search-plus(@click="chFontSize(0.1)")
      | &nbsp;
      button.fa.fa-search-minus(@click="chFontSize(-0.1)") 
    h2(v-else) Ждем данных &nbsp;
      span.fa.fa-refresh.fa-spin
    show-jax(ref="mainShow" :style="myStyleObj" v-if="this.pRender" :myHTML="this.pRender")
    .container(v-else) Генерируем задачу &nbsp;
      span.fa.fa-refresh.fa-spin
</template>

<script>
  module.exports = {
    beforeMount() {
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
      getProblem: function () {
        let prob = window.s.problems ;
        if(prob.length > 0 && typeof(this.id) !== 'undefined') {
          if(typeof(prob[this.id].pData) === "undefined") {
            url = "/problem/render/"+prob[this.id].id ;
            this.axios.post(url).then((response) => {
              let data = response.data ;
              if(data["status"] == "ok") {
                delete data["status"] ;
                prob[this.id].pData = data ;
                //prob[this.id].pRender = MyRender.merge(MyRender.render(data), prob[this.id].template) ;
                //console.log("GLOBAL s: " + JSON.stringify(window.s.problems[this.id].pData)) ;
                this.$set(prob[this.id],'pRender', MyRender.merge(MyRender.render(data), prob[this.id].template)) ;
              }
              else{
                console.log("ERROR: " + JSON.stringify(data)) ;
              }
            }).catch(error =>{console.log("ERROR "+url + ": "+error)}) ; 
          }
          else {
            console.log("Задача уже была сгенерирована... Используем кеш") ;
          }
          clearInterval(this.got) ;
        }
        else {
          console.log("Данных пока нет ...");
        }
      }
    }
  }
</script>
