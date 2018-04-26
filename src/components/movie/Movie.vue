<template>
  <div>    
    <!-- <common-header bgColor='rgb(33,150,243)'>
      <span slot="tittle">Movie</span>
    </common-header> -->
    <h1>movie</h1>
    <!-- <common-footer bgColor='rgb(33,150,243)'></common-footer> -->
    <ul class="list">
      <li class='movie' v-for="movie in movieList" :key="movie.id">
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      movieList:[]
    }
  },
  created(){
    axios.get(API_PROXY + 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10').then(res=>{
      this.movieList = res.data.data.movies;
      console.log(res);
}).catch(res=>{
      alert('获取数据失败');
    });
      
  }
}
</script>


<style scoped>
.list{
  padding: 0 0.2rem;
  margin: .2rem 0;

}
.movie{
  display: flex;
  border-bottom:1px solid #ccc;
  margin: .2rem .2rem;

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

</style>
