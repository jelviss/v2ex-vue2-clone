<template>
  <div class="info2">
    <p>今日热议主题</p>
    <div class="side-article-item" v-for="hot in hots"> 
      <img v-if="hot.member" v-bind:src="hot.member.avatar_mini"> 
      <p>{{hot.title}}</p></div>
  </div>
</template>
<script>

export default{
data() {
    return {
        hots:[
 				  {title: 'Loading'}
 				],
    }
  },

mounted() {
      this.$http.get('http://localhost:3000/api/hot')
      .then(res => {this.hots = res.data})
  }
};
</script>
<style lang="scss" scope>
    .info2{
      width: 330px;
      height: auto;
      background: #fff;
      margin-bottom: 10px;

      p{
        font-size: 12px;
        padding: 10px; 
        border-bottom: 1px solid #eee;
        flex: 1;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
      }
      p:nth-child(1){
        color: #ccc;
      }
      img{
        margin: 10px;
        min-width: 29px;
        max-width: 29px;
        height: 29px;
        flex: 1;
        border-radius: 6px;
      }
    }

    .side-article-item{
      display: flex;
      flex-flow:row wrap;
      justify-content:flex-start
    }

</style>
