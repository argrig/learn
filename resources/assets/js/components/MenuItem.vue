<template lang="pug">
a.mymenuitem.fa(:href="dt.id")
</template>

<script>
  module.exports = {
    mounted() {
      console.log('Menu item mounted...'+this.cls+' '+this.hrf)
    },
    props:['dt'],
  }
</script>
<style scoped>
.mymenuitem{
  padding-left:   5px;
  padding-right:  5px;
  color:  #888;
}
</style>
