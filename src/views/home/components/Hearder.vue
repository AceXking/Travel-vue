<template>
  <div class="header">
    <div class="left">
      <div class="iconfont back-icon">&#xe743;</div>
    </div>
    <div class="input">
      <span class="iconfont">&#xe641;</span>输入城市/景点/主题
    </div>
    <div class="right">
      城市
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>
<style lang="scss" scoped>
@import '~@css/global.scss';
.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;
  .left {
    width: 0.64rem;
    .back-icon {
        text-align: center;
        font-size: .4rem;
    }
  }
  .input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    padding-left: .2rem;
  }
  .right {
    width: 1.21rem;
    text-align: center;
  }
}
</style>