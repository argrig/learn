<template lang="pug">
  .my-subtitle {{titleText}}
    form(ref="addProb")
      .row
        .col-md-6
          .form-group
            label.my-label(for="uname") Краткое имя:
            input.form-control#uname(type="text" v-model="formData.uname" 
              placeholder="Введите имя. Только латиница, подчеркивание и цифры")
            small.form-text.text-muted(pattern="[a-z_0-9]")
              | Уникальный идентификатор, допустимые символы: [a-z_0-9]
        .col-md-6
          .from-group
            label.my-label(for="name") Название:
            input.form-control#name(type="text" v-model="formData.name" placeholder="Введите название")
            small.form-text.text-muted Полное название задачи
      .row
        .col-md-6
          .form-group
            label.my-label(for="template") Условие:
            textarea.form-control#template(rows="4" v-model="formData.template" 
              placeholder='Введите шаблон условия. <% %> для подстановки данных')
            small.form-text.text-muted Шаблон условия задачи: <%x%> для переменной x 
        .col-md-6
          .form-group
            label.my-label(for="ans_template") Ответ:
            textarea.form-control#ans_template(rows="4" v-model="formData.ans_template"
              placeholder="Введите шаблон ответа. <% %> для подстановки данных")
            small.form-text.text-muted Шаблон ответа задачи: <%system%> для переменной system 
      .row
        .col-md-6
          .form-group
            label.my-label(for="ans_form") Форма ответа:
            textarea.form-control#ans_form(rows="4" v-model="formData.ans_form"
              placeholder="Введите валидный JSON с полями формы ответа")
            small.form-text.text-muted Поля формы ответа в формате JSON
        .col-md-6
          .row
            .col-md-4
              .form-group
                button.btn.fa.fa-plus-square-o.my-button(type="button" @click="submit")
                  span.my-button-text &nbsp; {{buttonText}}
            .col-md-4
              .form-group
                button(v-if="!pFields").btn.btn-light.fa.fa-qustion.my-button(type="button" @click="example")
                  span.my-button-text ? &nbsp; Пример
            .col-md-4
              .form-group
                button.btn.btn-light.my-button(type="reset")
                  span.my-button-text &times;&nbsp; Очистить
</template>


<script>
  module.exports = {
    mounted() {
      //console.log('DATA: ' + JSON.stringify(this.$route.params))
    },
    props:['pFields'],
    data:function(){
      return {
      }
    },
    computed: {
      buttonText: function() {
        return (this.pFields) ? "Обновить" : "Добавить" ;
      },
      titleText: function() {
        return (this.pFields) ? "Обновление задачи" : "Добавление задачи" ;
      },
      formData: function() {
        return (this.pFields) ? this.pFields : 
          { uname: "", name: "", template: "", ans_template: "", ans_form: ""} ;
      }
    },
    methods: {
      example: function () {
        //console.log("running example...") ;
        this.formData = {
          uname: "my_gaus_eqn",
          name: "Исследование системы линейных уравнений методом Гаусса",
          template: "Исследовать СЛУ: $$ <%A%> $$",
          ans_template: "главные неизвестные: $ <%main_vect%> $\nтип: <%system_type%> ...",
          ans_form: '[{"id":"step","label":"Ступенчатый вид","type":"textarea", "small":"кол-во пробелов не важно"}]'
        } ;
      },
      submit: function() {
        //console.log(JSON.stringify(this.formData)) ;
        url = (this.pFields) ? "/edit/problem/update" : "/edit/problem/add" ;
        postData =  (({id,name,uname,template,ans_template,ans_form})  =>
                     ({id,name,uname,template,ans_template,ans_form}))  (this.formData) ;
        //console.log("URL: " + url) ;
        this.axios.post(url,postData,{headers:{"Cache-Control":"no-cache"}})
        .then (
          (response) => {
            //console.log("RESPONSE_DATA: " + JSON.stringify(response.data)) ;
            switch(response.data.status) {
              case "ok" :
                console.log("EditProblemAdd: OK");
                break;
              case "error" :
                console.log("EditProblemAdd: ERROR") ;
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


