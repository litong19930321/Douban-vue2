<template>
  <div class="list">
    <template v-if="model === 'thumbnail' " v-for="item in items">
      <router-link class="thumbnail" :to="{ name:'DetailPage',params: { id: item.id} }">
      <div class="content">
        <img v-bind:src="item.image_hlarge" alt="cover">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content | subStr }}</p>
      </div>
      <div class="author">
        <span class="name">{{ item.category_name }}</span>
        <span class="label" v-if="item.subcategory_name">{{ item.subcategory_name }}</span>
      </div>
      </router-link>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      model: {
         type: String,
         default: 'thumbnail'
      },
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {

      }
    },
    filters: {
      subStr: function (value) {
        value.replace(/<.+>|\s/,'')
        return value.slice(0,30)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list{
    .thumbnail{
      position: relative;
      display: block;
      padding: 2.5rem 1.8rem 2.5rem 0;
      margin-left: 1.8rem;
    }

    .content {
      overflow: hidden;
      margin-bottom: 1rem;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: 1.2rem;
      overflow: hidden;
    }

    img {
      float: right;
      width: 25.6%;
      height: 8.8678rem;
      margin-left: 2.5rem;
    }

    .author {
      font-size:  1.2rem;
      color: #ccc;
    }

    .label {
      position: absolute;
      bottom: 2.5rem;
      right: 1.8rem;
    }

  }
</style>
