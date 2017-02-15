<template>
    <div class="article-list">
      <div class="article" v-for="article in lists">
        <img v-if='article.member' :src="article.member.avatar_normal">
        <div class="article-body">
          <a class="title" :href="article.url" >{{article.title}}</a>
          <div class="other">
            <a href="#">职场话题</a>
            <a href="#">Username</a>
            <a href="#">7分钟前</a>
            <a href="#">最后回复</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default{
  name: 'ArticleList',
  props: ['lists'],

}
</script>

<style lang="scss" scope>
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
