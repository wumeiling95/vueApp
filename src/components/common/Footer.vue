<template>
    <ul class="footer" :style="{backgroundColor:bgColor}">
        <!-- 自定义的组件需要.native才能生效 -->
        <li><router-link @click.native="clickHandler({bgColor:'rgb(33,150,243)',tittle:'Movie'})" to="/">电影</router-link></li>
        <li><router-link @click.native="clickHandler({bgColor:'rgb(63,10,24)',tittle:'Music'})" to="/music">音乐</router-link></li>
        <li><router-link @click.native="clickHandler({bgColor:'rgb(43,191,100)',tittle:'Book'}) " to="/book">书籍</router-link></li>
        <li><router-link @click.native="clickHandler({bgColor:'rgb(0,150,136)',tittle:'Photo'})" to="/photo">照片</router-link></li>
    </ul>    
</template>

<script>
export default {
    data(){
        return {
            bgColor:'rgb(33,150,243)'
        }
    },
//   props:['bgColor'],
  methods:{
      clickHandler({bgColor,tittle}){
          this.bgColor = bgColor;
          this.$emit('change',{bgColor,tittle});
}
  }
}
</script>

<style scoped>
.footer{
     /* background-color: rgb(33,150,243); */
     position: fixed;
     bottom: 0;
     height: 1rem;
     width: 100%;
     display: flex;
}
.footer li{
    flex-grow: 1;
    font-size: .3rem;
    text-align:center;
    line-height: 1rem;
}
.footer a{
    text-decoration: none;
    color: #ccc;
    outline: none;
}
.footer li a.router-link-active{
    color: #fff;
}
</style>
