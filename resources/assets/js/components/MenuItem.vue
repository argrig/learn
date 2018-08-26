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
      console.log('Menu item mounted...')
    },
    props:['dt','item'],
  }
</script>
<style scoped>
.submenu{
  background-color: #ddd ;
}
.mymenuitem{
  color:  #555;
}
.mymenutext {
  font-family: Tahoma ;
  font-weight: bold ;
  padding-left: 2px ;
}

li:hover {
   border-bottom: 1px solid ;
}
</style>
