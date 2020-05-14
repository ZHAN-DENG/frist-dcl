<template>
  <div class="box">
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="danger" @click="submit">登录</van-button>
  </div>
</template>

<script>
import { Button, Cell, CellGroup, Field } from "vant";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    "van-button": Button,
    "van-cell": Cell,
    "van-cell-group": CellGroup,
    "van-field": Field
  },
  methods: {
    submit() {
      this.$axios
        .get("/login")
        .then(res => {
          var userNameArr = [],
            userPwdArr = [];
          for (let sum in res.data) {
            userNameArr.push(res.data[sum].name);
            userPwdArr.push(res.data[sum].pwd);
          }
          if (this.username == "") {
            alert("请输入用户名");
          } else if (this.password == "") {
            alert("请输入密码");
          } else if (userNameArr.indexOf(this.username) == -1) {
            alert("用户不存在！");
          } else {
            var index = userNameArr.indexOf(this.username);
            if (userPwdArr[index] == this.password) {
              this.$store.state.name = this.username;
              this.$store.commit("changeCollect", userNameArr);
              alert("登录成功！");
              // this.$router.push("/list");
            } else {
              alert("用户名或密码错误！");
            }
          }
        })
        .catch(err => {
          console.log("错误" + err);
        });
      // this.$axios
      //   .get("/getInfo")
      //   .then(res => {
      //     this.$store.commit("chatInfo",res.data);
      //   })
      //   .catch(err => {
      //     console.log("错误" + err);
      //   });
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  margin-top: 20px;
}
.van-button {
  width: 250px;
  margin-top: 10px;
  margin-left: 4rem;
}
</style>