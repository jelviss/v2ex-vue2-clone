<template>
  <div>
    <div class="info">
      <p>V2EX = way to explore</p>
      <p>V2EX 是一个关于分享和探索的地方</p>

      <p><a href="#">现在注册</a></p>
      <p>已注册用户请 <a href="#">登录</a></p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'RegisterPanel'
};
</script>

<style lang="scss" scope>
.info{
  width: 330px;
  height: auto;
  background: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content:flex-start;

    p{
      font-size: 12px;
      margin: 10px;
      flex:1
    }

    p:nth-child(1){
      font-weight: bold
    }
    p:nth-child(2){
      color: #ccc;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    p:nth-child(3), p:nth-child(4){
      align-self: center;
    }
}
</style>
