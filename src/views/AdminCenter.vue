<template>
  <div class="change">
    <div class="header">
      <h3>资料设置</h3>
      <el-form ref="form" :model="user" label-width="100px">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="user.username" placeholder="" type="text" />
        </el-form-item>
        <el-form-item label="头像：" prop="userhead">
          <img alt="" :src="imgStr" class="" />
          修改头像
          <input
            type="file"
            name="image"
            accept="image/*"
            @change="onchangeImgFun"
            class=""
          />
        </el-form-item>
        <el-form-item label="真实姓名：" prop="name">
          <el-input v-model="user.name" placeholder="" type="text" />
        </el-form-item>
        <el-form-item label="性别：" prop="gender">
          <input v-model="user.gender" type="radio" />男
          <input v-model="user.gender" type="radio" />女
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div>
      <input type="file" name="image" accept="image/*" @change='onchangeImgFun'
       class="header-upload-btn user-header-com">
      <img  alt="" :src='imgStr' class="user-header-img user-header-com">
      <p class="tip">图片限制50kb <span class="error">{{errorStr}}</span></p>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminCenter",
  data() {
    return {
      user: {
        username: "",
        name: "",
        gender: "",
        // userhead:""
      },
      userhead: "",
      input: "",
      usernameshow: "",
      radio: "1",
      imgStr: require("../assets/logo.png"),
      errorStr: "",
    };
  },
  mounted() {
    this.username = this.$store.state.username;
    this.usernameshow = this.$store.state.username;
    //默认调用获取用户信息接口
    this.getUserInfo(this.username);
  },
  methods: {
    getUserInfo(data) {
      console.log("data", data);
      // 接口复用，判断有无参数，再决定参数是否传递
      const obj = {
        params: {
          username: this.username,
        },
      };
      if (data) {
        obj.params = { ...obj.params, ...data };
        console.log(data);
      }
      //默认调用获取用户信息接口
      axios
        .get("/api/user/userpersonalinfo", obj)
        .then((response) => {
          console.log(response);
          this.tableData = response.data.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    onchangeImgFun(e) {
      var file = e.target.files[0];
      console.log(file);
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size;
      console.log(imgSize);
      var _this = this; // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 50 * 10240) {
        // 合格
        _this.errorStr = "";
        console.log("大小合适");
        // 开始渲染选择的图片
        // base64方法
        var reader = new FileReader();
        reader.readAsDataURL(file); // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          var dataURL = reader.result;
          console.log(dataURL);
          _this.imgStr = dataURL;
        };
      } else {
        console.log("大小不合适");
        _this.errorStr = "图片大小超出范围";
      }
    },

    submit() {
      console.log();
    },
  },
};
</script>

<style lang="less" scoped>
.change {
  display: flex;
  background-color: #f3f5f7;
  .header {
    color: #7a7f85;
    margin-left: 30px;
    font-weight: normal;
    width: 100%;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    h3 {
      border-bottom: 2px solid #7a7f85;
      line-height: 50px;
    }
    .el-form {
      margin-top: 40px;
      text-align: center;
      button {
        margin-top: 20px;
      }
    }
  }
}
</style>