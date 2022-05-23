<template>
  <div class="login">
    <div class="title">
      <img src="../assets/logo.png" alt="Logo" />
      <h1>大数据教学管理系统</h1>
    </div>
    <div class="login-box">
      <p>登录</p>
      <el-input v-model="username" placeholder="请输入用户名/学号"></el-input>
      <el-input
        v-model="password"
        placeholder="请输入密码"
        show-password
      ></el-input>
      <el-button type="primary" @click="login">登录</el-button>
      <router-link to="/forgetpassword" tag="span">忘记密码</router-link>
    </div>
    <div class="footer">
      <p>中科安高（北京）科技有限公司技术支持</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Md5 from "md5";

export default {
  name: "MyLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("登录", this.username);
      //调用登录接口，进行用户名/学号校验 密码校验
      axios
        .post("/api/system/user/login", {
          username: this.username,
          password: Md5(this.password),
        })
        .then((response) => {
          console.log(response);
          if (response.data.state == 1) {
            this.$router.push("/admin");
          } else if (response.data.state == 2) {
            this.$router.push("/student");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background: url("../assets/login-bg.png") no-repeat rgba(176, 220, 236, 1);
  /* 背景图片自适应填充插入 */
  background-size: cover;
  overflow: hidden;
  .title {
    display: flex;
    justify-content: center;
    margin-top: 10vh;
    h1 {
      margin-left: 30px;
      align-self: flex-end;
      font-size: 32px;
      color: #2b96e5;
    }
  }
  .login-box {
    width: 620px;
    height: 400px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 #999;
    margin: 5vh auto 0;
    overflow: hidden;
    text-align: center;
    p {
      font-size: 24px;
      color: #666;
      margin-top: 40px;
    }
    .el-input {
      width: 450px;
      height: 60px;
      margin-top: 30px;
      /deep/ input {
        height: 60px;
        font-size: 16px;
        background-color: rgba(243, 245, 247, 1);
      }
    }
    .el-button {
      width: 450px;
      height: 54px;
      margin-top: 23px;
      font-size: 18px;
    }
    span {
      display: block;
      width: 80px;
      margin: 10px 0 0 80px;
      font-size: 18px;
      color: #666;
      cursor: pointer;
    }
  }
  .footer {
    margin-top: 10vh;
    p {
      text-align: center;
      font-size: 14px;
      color: #262c32;
    }
  }
}
</style>
