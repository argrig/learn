<template lang="pug">
li.nav-item(v-if="typeof(dt.subitems) == 'undefined'")
  a.nav-link.py-0.mymenuitem(:class="dt.class" :href="dt.href") 
    span.mymenutext {{dt.title}}
li.nav-item.dropdown(v-else)
  a.nav-link.py-0.dropdown.dropdown-toggle.mymenuitem(:class="dt.class" :href="dt.href" data-toggle="dropdown")
    span.mymenutext {{dt.title}}
  .dropdown-menu.submenu
    a.nav-link.py-0.dropdown-item.mymenuitem(v-for="item in dt.subitems" :class="item.class" :href="item.href")
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
