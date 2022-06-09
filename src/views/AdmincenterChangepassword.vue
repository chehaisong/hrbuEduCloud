<template>
  <div class="changepassword">
    <div class="header">
      <h3>修改密码</h3>
      <el-form ref="form" :model="user" :rules="rules" label-width="80px">
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input
            v-model="user.oldPassword"
            placeholder="请输入旧密码"
            type="password"
          />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input
            v-model="user.newPassword"
            placeholder="请输入新密码"
            type="password"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            v-model="user.confirmPassword"
            placeholder="请确认密码"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Md5 from "md5";
export default {
  name: "ChangePassword",
  components: {},
  data() {
    const equalToPassword = (rule, value, callback) => {
      if (this.user.newPassword !== value) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    return {
      test: "1test",
      user: {
        oldPassword: undefined,
        newPassword: undefined,
        confirmPassword: undefined,
      },
      // 表单校验
      rules: {
        oldPassword: [
          { required: true, message: "旧密码不能为空", trigger: "blur" },
        ],
        newPassword: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { required: true, validator: equalToPassword, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.username = this.$store.state.username;
      console.log(this.user.confirmPassword, this.username);
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          axios
            .post("/api/user/updatepassword", {
              password: Md5(this.user.confirmPassword),
              // password:this.user.confirmPassword,
              username:this.$store.state.username,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.$message.error('修改失败');
          return false;
        }
      
      });
    },
  },
};
</script>

<style lang="less" scoped>
.changepassword {
  display: flex;
  background-color: #f3f5f7;
  .header {
    color: #7a7f85;
    margin-left: 30px;
    font-weight: normal;
    width: 100%;
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