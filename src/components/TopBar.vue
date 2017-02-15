<template>
      <div class="inner container">
        <div class="branch">
          <a href="#">
            <img src="https://cdn.v2ex.co/site/logo@2x.png?m=1346064962" width="94" height="30" />
          </a>
          <input type="text" name="search">
        </div>
        <nav class="topnav">
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <!--
            <li><a href="#">Username</a></li>
            <li><a href="#">工作空间</a></li>
            <li><a href="#">记事本</a></li>
            <li><a href="#">时间轴</a></li>
            <li><a href="#">设置</a></li>
            -->
            <li><router-link to="/Login">登陆</router-link></li>
          </ul>
        </nav>
      </div>
</template>
<script>
export default{
  name:'TopBar'
};
</script>

<style lang="scss" scope>
#header{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items:center;
  padding-top: 6px;
  background: #fff;
  box-shadow: 0 1px 7px 7px #d0cfcf;
}

    .topnav{
      font-size: 15px
    }

    .inner{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items:center;
    }

    .container{
      width: 1200px;
    }


    .branch {
      display: flex;
      width: 300px;

        a{
          padding-right: 10px
        }

        input{
          height: 30px;
          width: 400px;
          border-radius: 10px;
          border: 1px solid #ddd;
        }

    }
    .topnav ul{
      display: flex;
    }

    .topnav ul li{	
      padding-right: 10px
    }

</style>
