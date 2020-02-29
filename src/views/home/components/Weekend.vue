<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      list: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg",
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
  .item-img-wrapper {
      overflow: hidden;
      height: 0;
      padding-bottom: 33.9%;
  }
  .item-img {
      width: 100%;
  }
  .item-info {
    padding: .15rem;
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
  }
}
</style>
