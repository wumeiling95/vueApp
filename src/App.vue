<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <common-header :bgColor='bg'>
      <span slot="tittle">{{tittle}}</span>
    </common-header>
    <router-view/>
    <common-footer @change="switchTab"></common-footer>
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
    switchTab({bgColor,tittle}){
      this.bg = bgColor;
      this.tittle = tittle;
    }
  }
}
</script>

<style>

</style>
