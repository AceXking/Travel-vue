<template>
  <div class="icons">
      <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data() {
        return {
            iconList: [
                {
                    id: '0001',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc: '机票'
                },
                {
                    id: '0002',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc: '酒店'
                },{
                    id: '0003',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc: '机票'
                },
                {
                    id: '0004',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc: '酒店'
                },{
                    id: '0005',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc: '机票'
                },
                {
                    id: '0006',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc: '酒店'
                },{
                    id: '0007',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc: '机票'
                },
                {
                    id: '0008',
                    imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc: '酒店'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@css/global.scss';
@import '~@css/mixins.scss';
.icons {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    .icon {
        position: relative;
        overflow: hidden;
        width: 25%;
        height: 0;
        float: left;
        padding-bottom: 25%;
        .icon-img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: .44rem;
            box-sizing: border-box;
            padding: .2rem;
            img {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .icon-desc {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: .44rem;
            color: $darkTextColor;
            text-align: center;
            @include ellipsis;
        }
    }
}
</style>