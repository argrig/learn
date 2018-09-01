<template lang="pug">
li.nav-item(v-if="typeof(dt.subitems) == 'undefined'")
  router-link(:to="dt.href")
    a.nav-link.py-0.mymenuitem(:class="dt.class" href="#") 
      span.mymenutext {{dt.title}}
li.nav-item.dropdown(v-else)
  a.nav-link.py-0.dropdown.dropdown-toggle.mymenuitem(:class="dt.class" href="#" data-toggle="dropdown")
    span.mymenutext {{dt.title}}
  .dropdown-menu.submenu
    router-link(v-for="item in dt.subitems" :key="item.id" :to="item.href")
      a.nav-link.py-0.dropdown-item.mymenuitem(:class="item.class" href="#")
        span.mymenutext {{item.title}}
</template>

<script>
  module.exports = {
    mounted() {
    },
    props:['dt','item'],
  }
</script>
<style lang="scss" scoped>
  @import "myvars" ;
.submenu{
  background-color: $bg-dark ;
}
.mymenuitem{
  color: $fg-dark;
}
.mymenutext {
  font-family: $title-font ;
  font-weight: bold ;
  padding-left: 2px ;
}

li:hover {
   border-bottom: 2px solid ;
}
</style>
