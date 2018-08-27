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
<style scoped>
.myfooter {
  position:absolute ;
  bottom:0;
  padding:0;
  width:100% ;
  background-color:  #ddd ;
  font-family:Tahoma ;
  font-weight: bold ;
}
.copyright {
  padding-right: 5px ;
  text-align:right ;
}
</style>
