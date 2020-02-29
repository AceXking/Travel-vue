<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      list: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts3/1806/b5/e24b39fd8b5ab902.jpg_r_390x260x90_53007566.jpg",
          title: "西安-巴厘岛 8天跟团游",
          desc:
            "下单立减，网红秋千+蓝梦岛+情人崖下午茶+阿勇河+金巴兰BBQ+巴厘岛8天"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixins.scss";
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      @include ellipsis;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      @include ellipsis;
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
