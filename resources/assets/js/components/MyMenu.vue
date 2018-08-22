<template lang="pug">
nav.navbar.navbar-default.navbar-fixed-top.mynav
  .container-fluid
    .navbar-header
      .navbar-brand
        img(src="img/agplusmini.png" height="50px")
      .navbar-brand
        b Алгебра и Геометрия
    ul.nav.navbar-nav.mr-auto#menu
      li
        menu-item(v-for="item in items" :key="item.class" :class="item.class" :style="item.style" :dt="item")
</template>

<script>
  module.exports = {
    mounted() {
      console.log('Menu mounted...')
    },
    data: function() {
      return {items:[
        {class:"fa-home fa-2x", id:"home"},
        {class:"fa-pencil fa-2x", id:"edit",},
      ]}      
    }
  }
</script>
<style scoped>
  .mynav {
    background-color:#eee ;
    padding:0;
  }
</style>
