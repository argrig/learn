<template lang="pug">
  footer.myfooter(ref='statusRef')
    .float-right.copyright &copy; А. Григорянц, 2003 &ndash; {{this.Year}}
</template>

<script>
  module.exports = {
    mounted() {
      console.log('Status bar mounted...'+this.Year) ;
      this.$bus.$emit('status-height',this.$refs.statusRef.clientHeight) ;
    },
    props:[],
    computed: {
      Year: function() {
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
