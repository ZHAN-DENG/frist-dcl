<template>
  <div class="list">
    <van-nav-bar title="消息" left-arrow @click-left="onClickLeft" fixed :border="false" />
    <div class="list-info">
      <van-image round width="3rem" height="3rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-cell-group>
        <van-cell :value="gettime" to="/item">
          <template slot="title">
            <span
              class="custom-title"
            >{{ $store.state.collect.indexOf($store.state.name) == 1 ? $store.state.collect[0] : $store.state.collect[1]}}</span>
            &nbsp;
            <van-icon name info="1" />
          </template>
          <template slot="label">
            <span class="custom-label">
              {{ this.$store.state.chatInfo[
              this.$store.state.chatInfo.length - 1
              ].info }}
            </span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { NavBar, Toast, CellGroup, Cell, Icon, Image } from "vant";
export default {
  data() {
    return {
      gettime: "" //当前时间
    };
  },
  created() {
    this.getTime();
  },
  methods: {
    getTime() {
      var date = new Date(
        +new Date(
          new Date(
            this.$store.state.chatInfo[
              this.$store.state.chatInfo.length - 1
            ].time
          ).toJSON()
        ) +
          8 * 3600 * 1000
      )
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
      this.gettime = date.slice(5, 16);
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: {
    "van-nav-bar": NavBar,
    Toast: Toast,
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    "van-icon": Icon,
    "van-image": Image
  }
};
</script>

<style scoped>
.list {
  margin-top: 50px;
}
.van-nav-bar {
  background-color: #1e90ff;
}
.van-nav-bar__title {
  color: white;
}
.van-icon-arrow-left::before {
  color: white;
}
.list-info {
  display: flex;
}
.list-info .van-image {
  margin-top: 0.6rem;
  margin-left: 0.3rem;
}
.list-info .van-cell-group {
  flex-basis: 20rem;
}
</style>