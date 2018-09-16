<template lang="pug">
  main(role="main")
    .container(:style="this.contentStyle")
      router-view
</template>

<script>
  module.exports = {
    created() {
      this.$bus.$on('menu-height', (height) => {this.menuHeight=height}) ;
      this.$bus.$on('status-height', (height) => {this.statusHeight=height}) ;
    },
    mounted() {
      //console.log('Content mounted...')
    },
    props:[],
    data:function(){
      return {
        menuHeight:   30,
        statusHeight: 30,
      }
    },
    computed: {
      contentStyle: function () {
        var style = {paddingTop: this.menuHeight + 2 + "px", paddingBottom: this.statusHeight + 2 + "px"} ;
        //console.log('STYLE: ' + JSON.stringify(style)) ;
        return style ;
      }
    }
  }
</script>
<style scoped>
.tmp {
  text-align: center ;
}
</style>
