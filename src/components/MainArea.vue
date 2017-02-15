<template>
  <section class="content">
    <nav class="body-navbar">
      <a v-for="(item,index) in navs" v-text="item.name" :class="{active:cur==index}" @click="update(item.id, index)">
    </nav>
    <nav class="subbar" v-if="navs[cur]">
      <a v-for="item in navs[cur].sub" v-text="item.name"> 
    </nav>
    <ArticleList v-show="!loading" :lists="articles"></ArticleList>
    <div class="loading" v-show="loading">loading.............</div>
  </section>
</template>

<script>
import ArticleList from '../components/ArticleList'
export default{
  name: 'MainArea',
  components:{
    'ArticleList': ArticleList
  },

  data() {
    return {
      articles:[],
      loading: true,
      cur: null,
      navs: [
        {
          'name': '技术','id':'445', 'sub':[{'name':'程序员', 'id':'1'},{'name': 'Python', 'id':'2'},{'name': 'iDev', 'id':'3'}]
        },
        {
          'name': '创意','id':'519', 'sub':[{'name':'分享创造', 'id':'1'},{'name': '设计', 'id':'2'},{'name': '奇思妙想', 'id':'3'}]
        }
      ]
    }
  },

  methods: {
    update: function(node_id, index){
      this.loading = true
      this.cur = index
      this.$http.get(
            'http://localhost:3000/api/topics/'+node_id,
          )
        .then(res => {
          this.articles = res.data;
          this.loading=false;
        });
    },
  },

  computed: {
    getData:function() {
      this.$http.get(
            'http://localhost:3000/api/topics/'+this.node_id,
          )
        .then(res => {this.articles = res.data;});
    }
  },

  mounted() {
    this.$http.get(
        'http://localhost:3000/api/latest',
        )
      .then(res => {  
        this.articles = res.data;
        this.loading=false;
      });
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

    .active{
      color: #fff;
      background: #000;
    }

    .content{
      min-height: 500px;
      background: #fff;
      width: 770px;
      border-radius: 10px;
    }

    .body-navbar, .subbar{
      background: #fff;
      a{
        font-size:16px;
        padding: 3px;
        margin: 3px
      }
      a:active{
        background:#000;
      }
    }

    .subbar{
      background: #f9f9f9
    }

    .loading{
      padding: 20px
    }
</style>
