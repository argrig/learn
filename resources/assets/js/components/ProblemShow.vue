<template lang="pug">
  .container
    h2(v-if="typeof(s.problems[id]) !== 'undefined'") {{s.problems[id].name}} &nbsp;
    h2(v-else) Ждем данных &nbsp;
      span.fa.fa-refresh.fa-spin
    ul
      li
        a.my-collapse(href="#" v-b-toggle.problem="" @click="toggleChevron(0)") Условие &nbsp;
          span.fa(:class="'fa-chevron-' + chevron[0]")
        button.btn.btn-light.fa.fa-search-plus(@click="chFontSize(0.1)")
        button.btn.btn-light.fa.fa-search-minus(@click="chFontSize(-0.1)") 
        b-collapse#problem(visible)
          show-jax(ref="mainShow" :style="myStyleObj" v-if="this.pRender" :myHTML="this.pRender")
          .container(v-else) Генерируем задачу &nbsp;
            span.fa.fa-refresh.fa-spin
      li
        a.my-collapse(href="#" v-b-toggle.answer="" @click="toggleChevron(1)") Ввод ответа &nbsp;
          span.fa(:class="'fa-chevron-' + chevron[1]")
        b-collapse#answer(visible v-if="s.problems[id]") {{s.problems[id].ans_form}}
      li
        a.my-collapse(href="#" v-b-toggle.trueAns="" @click="toggleChevron(2)") Правильный ответ &nbsp;
          span.fa(:class="'fa-chevron-' + chevron[2]")
</template>

<script>
  module.exports = {
    mounted() {
      this.got = setInterval(this.getProblem, 500) ;
    },
    data:function() {
      return {
        fs: 1.5,
        got: "",
        s: window.s,
        id: this.$route.params.id,
        chevron: ["down","right","right"]
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
      toggleChevron: function(i) {
        this.$set(this.chevron,i, (this.chevron[i]=='down') ? 'right' : 'down') ;
      },
      chFontSize: function(size) {
        this.fs+=size ;
        //console.log(this.fs) ;
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
                //prob[this.id].pData = data ;
                //prob[this.id].pRender = MyRender.merge(MyRender.render(data), prob[this.id].template) ;
                //console.log("GLOBAL s: " + JSON.stringify(window.s.problems[this.id].pData)) ;
                this.$set(prob[this.id],'pData',data) ;
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

<style lang="scss">
</style>
