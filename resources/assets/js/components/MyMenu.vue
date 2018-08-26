<template lang="pug">
nav.navbar.navbar-expand-md.navbar-fixed-top.mynav
    .navbar-brand.mybrand
      img.mylogo(ref="mylogo" src="img/agplusmini.png")
      span(:style="myLogoText") {{ appname }}
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
          {class:"fa fa-home", id:"home", href:"#", title:"Домой", text:"Домой"},
          {class:"fa fa-pencil", id:"edit", href:"#", title:"Редактировать", text:"Редактировать", 
            subitems:[
              {class:"fa fa-question-circle dropdown-item", href:"#", title:"Задачи"},
              {class:"fa fa-check-circle dropdown-item", href:"#", title:"Тесты"},
              {class:"fa fa-info-circle dropdown-item", href:"#", title:"Теория"} 
            ]
          },
          {class:"fa fa-question-circle", id:"problem", href:"#", title:"Задачи"},
          {class:"fa fa-check-circle", id:"test", href:"#", title:"Тесты"},
          {class:"fa fa-info-circle", id:"theory", href:"#", title:"Теория"},
          {class:"fa fa-bar-chart", id:"stats", href:"#", title:"Статистика"},
        ],
        rmenu:[
          {class:"fa fa-user-plus", id:"register", href:"#", title:"Регистрация"},
          {class:"fa fa-sign-in", id:"login", href:"#", title:"Вход"},
        ],
        isMounted:false,
      }      
    },
    props:{appname:{default:"Алгебра"}},
    computed: {
      myLogoText: function() {
        if(this.isMounted == true) {
          left = this.$refs.mylogo.clientWidth + "px" ;
          return {paddingLeft: left, fontWeight:"bold"} ;
        }
      }
    }
  } ;
</script>
<style scoped>
  .mynav {
    background-color:#ddd ;
    padding:0;
  }
  .mybrand{
    padding:0;
  }
  .mylogo {
 	  position: absolute;
    padding:0 ;
    z-index: 1;
    left:0px;
    top: 0px; 
  }
</style>
