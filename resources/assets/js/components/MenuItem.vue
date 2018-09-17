<template lang="pug">
li.nav-item(v-if="typeof(dt.subitems) == 'undefined'")
  router-link.my-router-link(:to="dt.href" :class="dt.class") 
    //a.nav-link.py-0.mymenuitem(:class="dt.class" href="#" :style="underlined" @click="clickEvent(dt.id)") 
    span.mymenutext {{dt.title}}
li.nav-item.dropdown.my-router-link(v-else)
  a.nav-link.py-0.dropdown.dropdown-toggle.mymenuitem(:class="dt.class" 
    href="#" data-toggle="dropdown")
    span.mymenutext {{dt.title}}
  .dropdown-menu.submenu
    router-link(v-for="item in dt.subitems" :key="item.id" :to="item.href")
      a.nav-link.py-0.dropdown-item.mymenuitem(:class="item.class" href="#")
        span.mymenutext {{item.title}}
</template>

<script>
  module.exports = {
    data: function(){
      return {
        underlined: "",
      }
    },
    props:['dt'],
    methods:{
    }
  }
</script>
<style lang="scss" scoped>
//  @import "myvars" ;
@import "~@/_myvars.scss" ;
.submenu{
  background-color: $bg-dark ;
}
.mymenuitem{
  color: $fg-dark ;
}
li.nav-item > a:hover{
  text-decoration: none ;
}
.mymenutext {
  font-family: $title-font ;
  font-weight: bold ;
  padding-left: 2px ;
}

//li:hover {
//   border-bottom: 2px solid ;
//}

.my-router-link{
  color: $fg-dark ;
  padding-left: 0.3em ;
  padding-right: 0.3em ;
}
.my-router-link:hover{
  border-bottom: 2px solid ;
}

.router-link-active {
  border-bottom: 2px solid ;
}

</style>
