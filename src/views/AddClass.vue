<template>
   <div class="addclass">
    <div class="title">
      <router-link to="/edumenus/classmanage" tag="span" class="classmanage"
        >班级管理</router-link
      >
      <span>></span>
      <span>新增班级</span>
    </div>
    <div class="content">
      <p>基本信息</p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="所属学校" prop="school">
          <el-select v-model="ruleForm.school" placeholder="请选择所属院校">
            <el-option label="哈尔滨学院" value="哈尔滨学院"></el-option>
            <el-option label="青岛大学" value="青岛大学"></el-option>
            <el-option label="四川大学" value="四川大学"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属专业" prop="major">
          <el-select v-model="ruleForm.major" placeholder="请选择所属专业">
            <el-option label="计算机" value="计算机"></el-option>
            <el-option label="软件工程" value="软件工程"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="办学层级" prop="level">
          <el-select v-model="ruleForm.level" placeholder="请选择活动区域">
            <el-option label="本科" value="1"></el-option>
            <el-option label="高职" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="classname">
          <el-input v-model="ruleForm.classname"></el-input>
        </el-form-item>
      </el-form>
        </div>
        <el-form>
        <el-form-item class="submit">
          <el-button type="primary" size="small" @click="submitForm('ruleForm',ruleForm)"
            >保存</el-button
          >
          <el-button @click="resetForm('ruleForm',ruleForm)" size="small">取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"AddClass",
    data() {
    return {
        value: [],
        options: [
          {
            value: "哈尔滨学院",
            label: "哈尔滨学院",
            children: [
              {
                value: "计算机",
                label: "计算机",
              },
              {
                value: "软件工程",
                label: "软件工程",
              },
            ],
          },
          {
            value: "四川大学",
            label: "四川大学",
            children: [
              {
                value: "计算机",
                label: "计算机",
              },
              {
                value: "软件工程",
                label: "软件工程",
              },
            ],
          },
          {
            value: "青岛大学",
            label: "青岛大学",
            children: [
              {
                value: "计算机",
                label: "计算机",
              },
              {
                value: "软件工程",
                label: "软件工程",
              },
            ],
          },
        ],
      ruleForm: {
        classname: "",
        school: "",
        major: "",
        level:"",
        value:[],
      },
      rules: {
        classname: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        school: [
          { required: true, message: "请选择院校", trigger: "change" },
        ],
        major: [
          { required: true, message: "请选择专业", trigger: "change" },
        ],
        level: [
          { required: true, message: "请选择办学层级", trigger: "change" },
        ],
      },
    };
  
  },
    methods: {
    handleChange(value) {
      console.log(value);
    },
    // 校验填写信息并新增班级
    submitForm(formName,ruleForm) {
      // console.log(formName),
      console.log(ruleForm.classname),
      console.log(ruleForm.level),
      console.log(ruleForm.school),
      console.log(ruleForm.major),
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
          message: '新增班级成功',
          type: 'success',
          
        });
        axios
            .post("/api/classmanage/addclass", {
              classname: this.ruleForm.classname,
              school: ruleForm.school,
              major: ruleForm.major,
              level: ruleForm.level
            })
            .then((response) => {
              // console.log(data)
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.$message.error('信息填写不合格，新增班级失败');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    addClass(){
    }
  },
}
</script>

<style lang="less" scoped>
.addclass {
  width: 100%;
  margin-left: 20px;
  .title {
    span {
      margin-right: 10px;
      font-size: 16px;
      color: #7a7f85;
      line-height: 55px;
    }
    .classmanage {
      color: #2b96e5;
    }
  }
    .content {
    width: 980px;
    // height: 810px;
    background-color: #fff;
    border-radius: 6px;
    padding: 30px 0 70px 0;
    p {
      font-weight: 700;
      font-size: 16px;
      color: #262c32;
      margin-bottom: 40px;
      margin-left: 35px;
      border-left: 4px solid rgba(43, 150, 229, 1);
      padding-left: 15px;
    }
    .el-form{
      margin-left: 45px;
    }
    /deep/ .el-input__inner {
        width: 300px;
        margin-bottom: 10px;
      }
    }
  .submit{
    text-align: center;
    margin-top:125px;
    .el-button {
      width: 120px;
      margin-right: 40px;
    }
  }
}
</style>