<template>
  <div>    
    <!-- <common-header bgColor='rgb(33,150,243)'>
      <span slot="tittle">Movie</span>
    </common-header> -->
    <h1>movie</h1>
    <!-- <common-footer bgColor='rgb(33,150,243)'></common-footer> -->
    <ul class="list">
      <li class='movie' v-for="(movie,index) in movieList" :key='index'>
        <div class="movie-img">
          <img :src="movie.img" alt="">
        </div>
        <div class="movie-info">
          <p class="movie-name">{{movie.nm}}</p>
          <p>{{movie.ver}}</p>
          <p>主演：{{movie.star}}</p>
          <p>{{movie.shouInfo}}</p>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="isLoading">
      <img class="loading-cat" src="../../assets/img/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      movieList:[],
      isLoading:true
    }
  },
  //封装函数
  methods:{
    getMovieData(){
      axios.get(API_PROXY + `http://m.maoyan.com/movie/list.json?type=hot&offset=${this.movieList.length}&limit=10`).then(res=>{
      this.movieList = this.movieList.concat(res.data.data.movies);
      // console.log(res);
      this.isLoading = false;
}).catch(res=>{
      alert('获取数据失败');
    });
    }
  },
  created(){
    this.getMovieData();
  },
  //钩子函数
  mounted(){
    //获取滚动条高度
    //js和jquery，框架较大，优化麻烦；youvue不要操作dom结构
    window.onscroll = ()=>{
      // 兼容性问题，有的是body的高度，有的时html的高度
      let scrollTop = document.body.scrollTop || document.scrollingElement.scrollTop;
      //clientHeight可视区域的高度
      let clientHeight = document.documentElement.clientHeight;
      //内容高度
      let scrollHeight = document.documentElement.scrollHeight;
      // console.log(scrollTop,clientHeight,scrollHeight);
      if(scrollTop + clientHeight === scrollHeight){
        this.isLoading =true;
        this.getMovieData();
      }
    };
  }
}
</script>

<style scoped>
.list{
  margin: 0 0 1rem 0;
}
.movie{
  display: flex;
  border-bottom:1px solid #ccc;
  margin: .1rem .2rem .1rem .2rem;
}
.movie-img{
  flex-grow: 1;
  width: 0;
}
.movie-info{
  flex-grow: 1;
  width: 0;
}
p{
  font-size: 16px;
  margin: .2rem;
}
.movie-name{
  font-weight: bolder;
}
.loading{
  text-align: center;
}
.loading-cat{
  width: 200px;
}
</style>
