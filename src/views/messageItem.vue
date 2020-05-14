<template>
  <div ref="div">
    <van-nav-bar
      :title="$store.state.collect.indexOf($store.state.name) == 1 ? $store.state.collect[0] : $store.state.collect[1]"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="weapp-nav" slot="right" />
    </van-nav-bar>
    <div class="h"></div>
    <div
      class="itemCell"
      v-for="(item,index) in $store.state.chatInfo"
      :key="index"
      ref="item"
      :class="[item.to==$store.state.name?'item':'',item.to]"
    >
      <van-image width="35" height="35" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="bor">
        <span class="b1"></span>
        <div class="b2">{{ item.info }}</div>
      </div>
    </div>
    <div class="bottom">
      <van-cell icon="../../static/voice.png" center>
        <van-icon slot="left-icon" src="../../static/voice.png" />
        <template slot="title">
          <van-field
            class="inpotInfo"
            v-model="user.info"
            placeholder="请输入内容"
            @keyup.enter="enter"
            @focus="show=true"
            @input="inputShow"
          >
            <van-button slot="button" v-show="show" size="small" type="danger" @click="enter(1)">发送</van-button>
          </van-field>
        </template>
        <van-icon v-if="!show" slot="right-icon" name="../../static/smile.png" />
        <van-icon v-if="!show" slot="right-icon" name="../../static/add.png" />
      </van-cell>
    </div>
  </div>
</template>

<script>
import { NavBar, Toast, Icon, Cell, Field, Image, Button } from "vant";
export default {
  data() {
    return {
      show: false,
      blurShow: null,
      user: {
        to: this.$store.state.name,
        info: ""
      }
    };
  },
  // updated(){
  //   this.$refs.div.scrollTop = this.$refs.div.scrollHeight;
  //   console.log(this.$refs.div.scrollTop);
  // },
  created() {
    setTimeout(() => {
      let app = document.querySelector("#app");
      window.scrollTo(0, app.clientHeight);
    }, 10);
  },
  mounted() {
    var as = [];
    var ins = [];
    var dclIndex;
    var lingIndex = 0;
    this.$store.state.chatInfo.forEach((element, index) => {
      as.push(element.to);
    });
    as.map((item, index, array) => {
      if (
        array[index] ==
          (this.$store.state.collect.indexOf(this.$store.state.name) == 1
            ? this.$store.state.collect[0]
            : this.$store.state.collect[1]) &&
        array[index + 1] == this.$store.state.name
      ) {
        lingIndex = index + 1;
      }
      if (
        array[index] == this.$store.state.name &&
        array[index + 1] ==
          (this.$store.state.collect.indexOf(this.$store.state.name) == 1
            ? this.$store.state.collect[0]
            : this.$store.state.collect[1])
      ) {
        dclIndex = index + 1;
        let items = this.$refs.item;
        items[dclIndex].style.marginTop = `${39 * (dclIndex - lingIndex)}px`;
      }
    });
  },
  methods: {
    enter(index) {
      if (this.user.info == "") return;
      this.$axios
        .post("/insertInfo", this.user)
        .then(data => {
          this.user.info = "";
        })
        .catch(err => {
          console.log("提交失败");
        });
      this.$axios
        .get("/getInfo")
        .then(res => {
          this.$store.commit("chatInfo", res.data);
        })
        .catch(err => {
          console.log("错误" + err);
        });
      this.show = false;
    },
    inputShow() {
      if (this.user.info == "") {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  components: {
    "van-nav-bar": NavBar,
    "van-icon": Icon,
    "van-cell": Cell,
    "van-field": Field,
    "van-image": Image,
    "van-button": Button,
    Toast: Toast
  }
};
</script>

<style scoped>
.van-cell {
  padding: 5px 10px 5px 0px;
  background-color: #f8f8ff;
}
.itemCell {
  position: relative;
}
.h {
  height: 50px;
}
.itemCell :last-child {
  margin-bottom: 60px;
}
.itemCell .bor {
  position: absolute;
  top: 3px;
  left: 3rem;
}
.itemCell .bor .b1 {
  display: inline-block;
  width: 0;
  height: 0;
  border-right: 8px solid #9eea6a;
  border-bottom: 4px solid transparent;
  border-top: 4px solid transparent;
}
.itemCell .bor .b2 {
  position: absolute;
  top: 0;
  margin-left: 7px;
  height: 30px;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  line-height: 30px;
  max-width: 350px;
  background-color: #9eea6a;
  white-space: nowrap;
}
.item {
  float: right;
  clear: both;
}
.item .bor {
  position: absolute;
  top: 3px;
  left: -1.5rem;
  right: 3rem;
}
.item .bor .b1 {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 3px;
  border-right: 0px solid #9eea6a;
  border-left: 8px solid #9eea6a;
  border-bottom: 4px solid transparent;
  border-top: 4px solid transparent;
}
.item .bor .b2 {
  position: absolute;
  display: inline-block;
  top: 0;
  text-align: right;
  right: 0.45rem;
  height: 30px;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  line-height: 30px;
  max-width: 350px;
  background-color: #9eea6a;
  white-space: nowrap;
}

.bottom {
  width: 100%;
  position: fixed;
  bottom: 0px;
}
.bottom .van-icon {
  margin-left: 15px;
}
.van-icon__image {
  width: 1.5rem;
  height: 1.5rem;
}
.inpotInfo {
  padding-left: 10px;
  background-color: white;
}
</style>