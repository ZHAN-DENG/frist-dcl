<template>
  <div id="mount-point" @click="change">
    <div
      class="itemCellLeft"
      v-for="(item,index) in list"
      :key="index"
      :class="[item.to=='dcl'?'item':'',item.to]"
    >
      <img width="35" height="35" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="bor">
        <span class="b1"></span>
        <div class="b2">{{ item.chat }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { to: "ling", chat: "qwe" },
        { to: "dcl", chat: "rty" },
        { to: "ling", chat: "asd" },
        { to: "ling", chat: "fgh" },
        { to: "dcl", chat: "zxc" },
        { to: "ling", chat: "vbn" },
        { to: "dcl", chat: "hello" },
        { to: "ling", chat: "hello" }
      ],
      index: null,
      isActive: false
    };
  },
  methods: {
    change() {

    }
  }
};
</script>

<style scoped>
.itemCellLeft {
  position: relative;
}
.dcl + .ling {
  margin-top: 35px;
}
.itemCellLeft .bor {
  position: absolute;
  top: 3px;
  left: 3rem;
}
.itemCellLeft .bor .b1 {
  display: inline-block;
  width: 0;
  height: 0;
  border-right: 8px solid #9eea6a;
  border-bottom: 4px solid transparent;
  border-top: 4px solid transparent;
}
.itemCellLeft .bor .b2 {
  position: absolute;
  /* top: -3px; */
  top: 0;
  left: 0.5rem;
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
.cls {
  margin-top: 35px;
  margin-bottom: 35px;
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
  left: -6rem;
  right: 0.5rem;
  height: 30px;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  line-height: 30px;
  max-width: 350px;
  background-color: #9eea6a;
  white-space: nowrap;
}
</style>