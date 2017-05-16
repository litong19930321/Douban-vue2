<template>
  <div class="detail-view has-header">
    <banner title="每天看点好内容"></banner>
    <template v-if="!showLoading">
      <div class="info">
        <!--标题栏-->
        <h2>
          {{ eventItem.title }}
          <span class="badge">{{ eventItem.loc_name }}</span>
        </h2>
        <!--图片-->
        <div class="poster">
          <img :src="eventItem.image_hlarge" alt="big_img">
        </div>
        <!--内容部分-->
        <div class="detail">
          <span>时间:&nbsp;&nbsp;</span>
          <ul>
            <li>{{ eventItem.begin_time }}</li>
            <li>{{ eventItem.end_time }}</li>
          </ul>
        </div>
        <div class="detail">
          <span>地点:&nbsp;&nbsp;</span>
          <ul>
            <li>{{ eventItem.address }}</li>
          </ul>
        </div>
        <div class="detail">
          <span>费用:&nbsp;&nbsp;</span>
          <ul>
            <li>{{ eventItem.fee_str }}</li>
          </ul>
        </div>
        <div class="detail">
          <span>类型:&nbsp;&nbsp;</span>
          <ul>
            <li>{{ eventItem.category_name }}</li>
          </ul>
        </div>
        <div class="detail">
          <span>承办人:&nbsp;&nbsp;</span>
          <ul>
            <li>{{ eventItem.owner.name }}</li>
          </ul>
        </div>
        <tags v-if="eventItem.tags" :items="eventItem.tags | tagsArray"></tags>
        <div class="desc">
          <div class="title">活动详情</div>
          <div v-if="eventItem.content" class="content" v-html="content"></div>
        </div>
        <download-app></download-app>
      </div>
    </template>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'

  import Banner from '../components/Banner.vue'
  import Loading from '../components/Loading.vue'
  import Tags from '../components/Tags.vue'
  import DownloadApp from '../components/DownloadApp.vue'

  export default  {
    components: {
      Banner,
      Loading,
      Tags,
      DownloadApp
    },
    data() {
      return {
        showLoading: true
      }
    },
    computed: {
      content: function () {
        return this.eventItem.content.replace(/<img.+?>/ig,'')
      },
      ...mapState({
        eventItem: state => state.activities.eventItem
      })
    },
    created () {
      const id = this.$route.params.id
      this.$store.dispatch({
        type: 'getSingleEvent',
        id: id
      }).then( res => {
        this.showLoading = false
      })
    },
    filters: {
      tagsArray: function (tags) {
        return tags.split(',')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    margin: 1rem;

    h2 {
      margin: 2rem 0;
      font-weight: bold;
      color: #494949;
    }

    .badge {
      display: inline-block;
      padding: 0.1rem 0.5rem;
      margin-bottom: 0.3rem;
      vertical-align: middle;
      line-height: 1.8rem;
      font-size: 1.2rem;
      color: #fff;
      background-color: #ff8263;
      border-radius: 0.2rem;
    }

    .poster {
      margin: 2rem auto;
      text-align: center;

      img {
        width: 100%;
        max-width: 22rem;
        height: auto;
      }
    }

    .detail {
      display: flex;
      margin-left: 0rem;
      margin-bottom: 1rem;
      min-height: 1.5rem;
      font-size: 1.4rem;
      span {
        color: #666;
      }

      ul {

      }

    }

    .desc {
      margin-top: 1rem;

      .title {
        font-size: 1.8rem;
        font-weight: bold;
        color: green;
        margin-bottom: 1.5rem;
      }

      .content {
        font-size: 1.4rem;
      }
    }
}
</style>
