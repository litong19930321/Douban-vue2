<template>
  <div class="download-app">
    <div class="logo">
      <img src="../assets/douban-app-logo.png">
      <div class="desc">
        <span class="title">豆瓣</span>
        <span class="sub-title">我们的精神角落</span>
      </div>
    </div>
    <div class="guide">
      <a href="#">去 App Store 免费下载 iOS 客户端</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="scss" scoped>
  .download-app{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items:  center;
    margin-bottom: 3rem;

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      .desc {
        margin-left: 1rem;
        .title {
          font-size: 2rem;
          line-height: 2.4rem;
        }
        .sub-title {
          font-size: 1.4rem;
        }

      }
      img {
        width: 5rem;
        height: 5rem;
        display: inline-block;
      }

      span {
        display: block;
      }
    }

    .guide {
      margin-top: 1rem;
      a {
        color: #42bd56;
        font-size: 1.5rem;
      }


    }

  }
</style>
