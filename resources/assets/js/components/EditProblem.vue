<template lang="pug">
div.w-100
  b-card.my-b-card.w-100(no-body)
    span.my-title-name Редактор задач
    b-tabs(card, vertical)
      b-tab(active)
        template(slot="title")
          i.fa.fa-list-ul.my-title-link
            span.my-title-link-text &nbsp;Список
        .my-subtitle Список задач
        textarea(rows="5" cols="50" label="mathjaxTest" v-model="mathjaxSrc")
        button(type="button" label="отобразить" @click="this.render") Отобразить
        div(ref="rendered" v-html="mathjaxSrc")
      b-tab(title="Добавить")
        template(slot="title")
          i.fa.fa-plus-square-o.my-title-link
            span.my-title-link-text &nbsp;Добавить
        .my-subtitle Добавление задачи
        form
          .form-group
            label.my-label(for="uname") Краткое имя:
            input.form-control#uname(type="text" placeholder="например: example_problem2")
            small.form-text.text-muted(pattern="[a-z_0-9]")
              | Уникальный идентификатор, допустимые символы: [a-z_0-9]
          .from-group
            label.my-label(for="name") Название:
            input.form-control#name(type="text" placeholder="например: Вычисление несобственного интеграла")
            small.form-text.text-muted Полное название задачи
          .form-group
            label.my-label(for="template") Шаблон условия:
            textarea.form-control#template
            small.form-text.text-muted Шаблон условия задачи: [[x]] для переменной x 
          .form-group
            label.my-label(for="ans_template") Шаблон ответа:
            textarea.form-control#ans_template
            small.form-text.text-muted Шаблон ответа задачи: [[x]] для переменной x 
          .form-group
            label.my-label(for="ans_form") Форма ответа:
            textarea.form-control#ans_form
            small.form-text.text-muted Поля формы ответа в формате JSON
      b-tab(title="Изменить")
        template(slot="title")
          i.fa.fa-pencil.my-title-link
            span.my-title-link-text &nbsp;Изменить
        div Выберите задачу из списка ...

</template>

<script>
  module.exports = {
    mounted() {
      console.log('Problem editor mounted...')
    },
    data:function(){
      return {
        mathjaxSrc: "$$\\int_a^b\\limits f(x) dx$$\n\n"
      }
    },
    methods: {
      render: function(event) {
        //console.log("render executed..."+this.$refs.rendered.innerHTML) ;
        //console.log((window.MathJax) ? "MJ initialized" : "NO") ;
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.rendered]);
      }
    }
  }
</script>

<style lang="scss" scoped> 
@import 'myvars' ;
.my-title-link{
  color: $fg-light ;
}
.my-title-link-text{
  font-family: $title-font ;
  font-weight: bold ;
}
.my-title-name{
  padding: 2px;
  font-family: $title-font ;
  font-weight: bold ;
  font-size: 120% ;
}

.my-subtitle{
  font-family: $title-font ;
  font-weight: bold ;
}

.my-label{
  font-family: $title-font ;
}
.my-b-card{
  width: 100% ;
}

</style>
