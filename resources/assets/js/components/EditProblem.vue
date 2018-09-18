<template lang="pug">
div
  b-card
    span.my-title-name Редактор задач
    b-tabs(card, vertical)
      b-tab(active)
        template(slot="title")
          i.fa.fa-list-ul.my-title-link
            span.my-title-link-text &nbsp;Список
        .my-subtitle Список задач
          .list-group
            a.list-group-item.list-group-item-action.my-list-item(v-if="s.problems.length>0"
              v-for="(item, index) in s.problems" :id="item.id" :key="index"
              @mouseover="mouseOver(index,'on')" @mouseleave="mouseOver(index,'off')")
              .row
                .col {{item.name}}
                .col.text-right(v-if="!showButton[index]" :style="{display: 'none'}")
                .col.text-right(v-else :style="showButton[index]")
                  button.btn.btn-light.fa.fa-cogs(type='button' variant='light' @click="problemShow(index)") &nbsp; Показ
                  |&nbsp;
                  button.btn.btn-light.fa.fa-pencil(variant='light') &nbsp; Изменить
            a.list-group-item.my-list-item(v-else) Ждем данных
              span.fa.fa-refresh.fa-spin
      b-tab(title="Добавить")
        template(slot="title")
          i.fa.fa-plus-square-o.my-title-link
            span.my-title-link-text &nbsp;Добавить
        edit-problem-add
      b-tab(title="Изменить")
        template(slot="title")
          i.fa.fa-pencil.my-title-link
            span.my-title-link-text &nbsp;Изменить
        div Выберите задачу из списка ...
        textarea(rows="5" cols="50" label="mathjaxTest" v-model="mathjaxSrc")
        button(type="button" label="отобразить" @click="this.render") Отобразить
        div(ref="rendered" v-html="mathjaxSrc")

</template>

<script>
  module.exports = {
    mounted() {
      //console.log("TEST: " + JSON.stringify(window.s.problems)) ;
    },
    data:function(){
      return {
        showButton: [],
        styleNone: {display: 'none'},
        styleBlock:{display: 'block'},
        s: window.s,
        mathjaxSrc: "$$\\int_a^b\\limits f(x) dx$$\n\n",
        formData:{
          uname: "gauss_eqn",
          name: "исследование СЛУ методом Гаусса",
          template: "Исследовать СЛУ: $$ [[A]] $$",
          ans_template: "главные неизвестные: $ [[main_vect]] $\nтип: [[system_type]] ...",
          ans_form: '[{"id":"step","label":"Ступенчатый вид","type":"textarea", "small":"кол-во пробелов не важно"}]'
        }
      }
    },
    computed: {
    },
    methods: {
      mouseOver: function(index, state) {
        this.$set(this.showButton, index, (state=='on') ? this.styleBlock : this.styleNone) ;
        //console.log(JSON.stringify(this.showButton)) ;
      },
      problemShow: function(id) {
        console.log(id) ;
        this.$router.push("/problem/show/"+id) ;
      },
      render: function(event) {
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.rendered]);
      },
      submit: function() {
        this.axios.post('/edit/problem/add',this.formData,{headers:{"Cache-Control":"no-cache"}})
        .then (
          (response) => {
            console.log("RESPONSE_DATA: " + JSON.stringify(response.data)) ;
            switch(response.data.status) {
              case "ok" :
                console.log("OK");
                break;
              case "error" :
                console.log("ERROR") ;
                break;
            }
          }
        )
        .catch (
          (error) => {
            console.log(error)
          }
        );
      }
    }
  }
</script>

<style lang="scss" scoped> 
</style>
