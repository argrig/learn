<template lang="pug">
nav.navbar.navbar-expand-md.fixed-top.mynav
    .navbar-brand.mybrand
      img.mylogo(ref="mylogo" src="img/agplusmidi.png")
      span.my-logo-text {{ appname }}
    button.navbar-toggler.navbar-light(type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Показать меню")
      span.navbar-toggler-icon
    .collapse.navbar-collapse#mynav
      ul.navbar-nav.mr-auto#lmenu
        menu-item(v-for="item in lmenu" :key="item.id" :dt="item")
      ul.navbar-nav.ml-auto#rmenu
        menu-item(v-for="item in rmenu" :key="item.id" :dt="item")
</template>

<script>
  module.exports = {
    mounted() {
      this.isMounted=true ;
      console.log(this.myLeft)
    },
    data: function() {
      return {
        lmenu:[
          {class:"fa fa-home", id:"home", href:"/home", title:"Домой"},
          {class:"fa fa-pencil-square-o", id:"edit", href:"#", title:"Редактировать", 
            subitems:[
              {class:"fa fa-question-circle dropdown-item", id:"1", href:"/edit/problem", title:"Задачи"},
              {class:"fa fa-check-square-o dropdown-item", id:"2", href:"/edit/test", title:"Тесты"},
              {class:"fa fa-info-circle dropdown-item", id:"3", href:"/edit/theory", title:"Теория"} 
            ]
          },
          {class:"fa fa-question-circle", id:"problem", href:"/problem", title:"Задачи"},
          {class:"fa fa-check-square-o", id:"test", href:"/test", title:"Тесты"},
          {class:"fa fa-info-circle", id:"theory", href:"/theory", title:"Теория"},
          {class:"fa fa-bar-chart", id:"stats", href:"/stats", title:"Статистика"},
        ],
        rmenu:[
          {class:"fa fa-user-plus", id:"register", href:"/register", title:"Регистрация"},
          {class:"fa fa-sign-in", id:"login", href:"/login", title:"Вход"},
        ],
        isMounted:false,
      }      
    },
    props:{appname:{default:"Алгебра"}},
    //computed: {
     // myLogoText: function() {
       // if(this.isMounted == true) {
         // left = this.$refs.mylogo.clientWidth + "px" ;
          //return {paddingLeft: left, fontWeight:"bold"} ;
       // }
      //}
    //}
  } ;
</script>
<style lang="scss" scoped>
  @import "myvars.scss" ; 
  .mynav {
    background-color: $bg-dark ;
    padding:0;
  }
  .mybrand{
    padding:0;
  }
  .my-logo-text{
    padding-left: $logo-width ;
    font-weight: bold ;
  }
  .mylogo {
 	  position: absolute;
    padding:0 ;
    z-index: 1;
    left:0px;
    top: 0px; 
    height: $logo-height ;
  }
</style>
