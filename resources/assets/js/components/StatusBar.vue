<template lang="pug">
  footer.myfooter
    .float-right.copyright &copy; А. Григорянц, 2003 - {{this.copyRight}}
</template>

<script>
  module.exports = {
    mounted() {
      console.log('Status bar mounted...'+this.copyRight) ;
    },
    props:[],
    computed: {
      copyRight: function() {
        myDate=new Date() ;
        return myDate.getFullYear() ;
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "myvars.scss" ;
.myfooter {
  position:fixed ;
  bottom:0;
  padding:0;
  width:100% ;
  background-color:  $bg-dark ;
  font-family:$title-font ;
  font-weight: bold ;
}
.copyright {
  padding-right: 5px ;
  text-align:right ;
}
</style>
