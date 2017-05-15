<template>
  <!--此组件 navBottom情况下 为页面底部的 导航栏-->
  <div class="sub-nav">
    <div class="navBottom" v-if="model === 'navBottom' ">
      <div class="nav-item">
        <!--<router-link v-bind:to="{ name: 'RegisterView' }">注册账号</router-link>-->
        <router-link v-bind:to="{ name: 'RegisterPage' }">注册账号</router-link>
        <!--<template v-if="currentUser.email">-->
          <!--<a href="#" v-on:click.prevent="logout">退出登录</a>-->
        <!--</template>-->
        <!--<template v-else>-->
          <router-link v-bind:to="{name: 'LoginPage'}">登录豆瓣</router-link>
        <!--</template>-->
      </div>
      <div class="nav-item">
        <a href="https://movie.douban.com/">使用桌面版</a>
        <a href="#">使用豆瓣App</a>
      </div>
    </div>
    <!--quickNav情况下 为 快速导航栏-->
    <div class="quickNav" v-if="model === 'quickNav' ">
      <ul class="quick-nav">
        <li>
          <router-link :to="{ name: 'MoviePage' }">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'StatusPage' }">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'RegisterPage' }">注册账号</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'LoginPage' }">登录豆瓣</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        model: {
          type: String,
          default: 'quickNav'
        }
      },
      data() {
        return {

        }
      },
      computed: {

      },
      methods: {
        logout: function () {
          console.log('logout')
        }
      },
      created() {

      }
    }
</script>

<style lang="scss" scoped>
.navBottom{
  width: 100%;
  border-bottom: 0.1rem solid #f3f3f3;

  .nav-item {
    border-top: 0.1rem solid #f3f3f3;
    padding: 1.3rem 0;
    text-align: center;
  }

  a {
    width: 49%;
    display: inline-block;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: #42bd56;

    &:first-child {
         border-right: 0.1rem solid #e5e5e5;
     }
  }
}
.quickNav {
  ul {
    overflow: hidden;
    margin-top: 1rem;
    padding-top: 0.6rem;

    li {
      float: left;
      width: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      font-size: 1.5rem;
    }

    a {
      display: block;
      max-width: 100%;
      padding: 1.2rem 0;
      line-height: 2rem;
      text-align: center;
      background-color: #f6f6f6;
      color: #494949;
      border-radius: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }

}
</style>
