<template>
  <div class="info3">
    <p>最热节点</p> 
    <div class="tag">
      <a href="#" v-for="tag in tags">{{tag}}</a>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      tags:[
        '问与答','酷工作','分享发现','程序员'
      ]
    }
  }
}
</script>
<style lang="scss" scope>
.info3{
  width: 330px;
  height: 200px;
  background: #fff;

    a{
      font-size: 12px;
      padding: 10px;
    }

    p:nth-child(1){
      font-size: 12px;
      padding: 10px;
      color: #ccc;
      border-bottom: 1px solid #eee;
    }
}
</style>
