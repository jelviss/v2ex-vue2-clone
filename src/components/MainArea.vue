<template>
  <section class="content">
    <nav class="body-navbar">
      <a href="#">技术</a>
      <a href="#">创意</a>
      <a href="#">好玩</a>
      <a href="#">酷工作</a>
      <a href="#">交易</a>
      <a href="#">城市</a>
    </nav>
    <nav class="subbar">
      <a href="#">酷工作</a>
      <a href="#">求职</a>
      <a href="#">职场</a>
      <a href="#">外包</a>
    </nav>
    <div class="article-list">
      <div class="article" v-for="article in articles">
        <img src="http://img.jsqq.net/uploads/allimg/150228/1_150228191103_3.jpg">
        <div class="article-body">
          <a class="title">{{article.title}}</a>
          <div class="other">
            <a href="#">职场话题</a>
            <a href="#">Username</a>
            <a href="#">7分钟前</a>
            <a href="#">最后回复</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data() {
    return {
      articles:[
      {title: 'Loading'}
      ]
    }
  },
  mounted() {
    this.$http.get(
        'http://localhost:3000/api/latest',
        )
      .then(res => {this.articles = res.data});
    //this.$http.get('http://localhost:3000/api.json').then(res => {this.articles = res.data})
  }
}
</script>

<style lang="scss" scope>
main{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 1150px;
  margin: 20px auto 0 auto;
}

    .content{
      min-height: 500px;
      background: #fff;
      width: 770px;
      border-radius: 10px;
    }

    .body-navbar{
      background: #fff;
      border-radius: 10px;
    }

    .article{
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      border-bottom: 1px solid #eee;
      padding: 10px
    }

    .article img{
      height: 48px;
      width: 48px;
    }

    .article-body{
      display: flex;
      flex: 1;
      flex-flow: row wrap;
      align-items: flex-start;
      padding-left: 10px;
    }
    .article-body a{
      font-size: 16px;
      width: 100%;
    }

    .article .other a{
      font-size: 12px;
    }
</style>
