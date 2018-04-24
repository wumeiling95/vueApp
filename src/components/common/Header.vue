<template>
    <div class="header" :style="{background:bgColor}">
        <span class="home" :style="{background:bgColor}">首页</span>
        <h2 class="tittle">
            <!-- 插槽 -->
            <slot name="tittle">Movie</slot>
        </h2>
    </div>
</template>

<script>
export default {
  props:['bgColor']
}
</script>

<style scoped>
 .header{
     height: 1rem;
     /* background-color: rgb(33,150,243); */
     color:#fff;
     position:fixed;
     top: 0;
     width: 100%;
     font-size: .5rem;
 }
 .tittle{
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
 }
 .home{
     line-height: 1rem;
     color: #fff;
     margin-left: 0.1rem;
     font-size: .3rem;
 }
</style>
