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
                  button.btn.btn-light.fa.fa-cogs.my-button(variant='light' @click="problemShow(index)") &nbsp; Показ
                  |&nbsp;&nbsp;
                  button.btn.btn-light.fa.fa-pencil.my-button(variant='light' @click="problemEdit(index)") &nbsp; Изменить
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

</template>

<script>
  module.exports = {
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
    methods: {
      mouseOver: function(index, state) {
        this.$set(this.showButton, index, (state=='on') ? this.styleBlock : this.styleNone) ;
      },
      problemShow: function(id) {
        console.log(id) ;
        this.$router.push("/problem/show/" + id) ;
      },
      problemEdit: function(id) {
        path = "/problem/edit/" + id ;
        params = {"pFields": s.problems[id]} ;
        console.log(JSON.stringify(params)) ;
        this.$router.push({name: 'problem-edit', params: {id: id, pFields: s.problems[id]} }) ;
      }
    }
  }
</script>

<style lang="scss" scoped> 
</style>
