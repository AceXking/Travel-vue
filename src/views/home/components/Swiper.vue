<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("@/assets/img/banner1.jpg")
        },
        {
          id: "0002",
          imgUrl: require("@/assets/img/banner2.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper ::v-deep .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 30.25%;
  overflow: hidden;
}
.swiper-img {
  width: 100%;
}
</style>