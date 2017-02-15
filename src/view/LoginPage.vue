<template>
  <div class="wrap">
    <header id="header">
      <TopBar></TopBar>
    </header>
    <main>
      <section class="content">
        <MainArea></MainArea>
      </section>
      <aside class="sidebar">
        <RegisterPanel></RegisterPanel>
        <TodayHot></TodayHot>
        <TagCloud></TagCloud>
      </aside>
    </main>
  </div>
</template>
<script>
import MainArea from '../components/MainArea';
import TopBar from '../components/TopBar';
import RegisterPanel from '../components/RegisterPanel';
import TodayHot from '../components/TodayHot';
import TagCloud from '../components/TagCloud';

export default{
  name: 'MainWrapper',
  components: {
    'MainArea': MainArea,
    'TopBar': TopBar,
    'RegisterPanel': RegisterPanel,
    'TodayHot': TodayHot,
    'TagCloud': TagCloud
  }
}
</script>

<style lang="scss" scope>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body{
      background: #d7d7d7;
      font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
    }

    ul, li{
      list-style: none;
    }

    a{
      text-decoration: none;
      color: #556
    }

    div{
      border-radius: 10px
    }

    main{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      width: 1150px;
      margin: 20px auto 0 auto;
    }

    #header{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items:center;
      padding-top: 6px;
      background: #fff;
      box-shadow: 0 1px 7px 7px #d0cfcf;
    }

    .content{
      min-height: 500px;
      background: #fff;
      width: 770px;
      border-radius: 10px;
    }

    .sidebar{
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      min-height: 1000px;
      width: 330px
    }

    nav{
      font-size: 13px;
      padding: 10px;
    }
</style>
