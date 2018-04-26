<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <common-header :bgColor='bg' @home='home'>
      <span slot="tittle">{{tittle}}</span>
    </common-header>
    <router-view/>
    <common-footer @change="switchTab" :bgColor='bg'></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'

export default {
  name: 'App',
  components:{
    CommonHeader,
    CommonFooter
  },
  data(){
    return{
      bg:'rgb(33,150,243)',
      tittle:'Movie'
      }
  },
  methods:{
    home(){
      this.switchTab("movie");
      this.$router.push('/');
    },
    switchTab(tabName){
      this.tittle = tabName ;
      // this.bg = bgColor;
      // this.tittle = tittle;
      switch(tabName){
        case 'movie':
        this.bg = 'rgb(33,150,243)';
        break;
         case 'music':
        this.bg = 'rgb(63,10,24)';
        break;
         case 'book':
        this.bg = 'rgb(43,191,100)';
        break;
         case 'photo':
        this.bg = 'rgb(0,150,136)';
        break;
        default:
        this.bg = 'rgb(33,150,243)';
      }
    }
  }
}
</script>

<style>

</style>
