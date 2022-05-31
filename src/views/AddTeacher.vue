<template>
  <div class="addteacher">
    <ul class="title">
      <router-link to="/edumenus/teachermanage" tag="li">教师管理</router-link>
      <li>></li>
      <li>新增教师</li>
    </ul>
    <div class="content">
      <p>基本信息</p>
      <ul class="stuwrite">
        <li class="block">
          <span>所属院校</span>
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </li>
        <li class="block">
          <span class="demonstration">所属专业</span>
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </li>
        <li class="jia">
          <span class="demonstration">所属班级</span>
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </li>
        <li>
          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="班级名称"
              prop="classname"
              :rules="[
                { required: true, message: '班级名称不能为空' },
                { type: 'text', },
              ]"
            >
              <el-input
                type="classname"
                v-model.number="numberValidateForm.classname"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </li>
      </ul>
    </div>
    <div class="commit">
      <el-button
        type="primary"
        size="small"
        @click="submitForm('numberValidateForm', 'dynamicValidateForm')"
        >提交</el-button
      >
      <el-button size="small" @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>
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
          value: "清华大学",
          label: "清华大学",
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
          value: "北京大学",
          label: "北京大学",
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
      classname: "",
      numberValidateForm: {
        classname: "",
      },
    };
  },
}
</script>

<style lang="less" scoped>
.addteacher {
  width: 100%;
  margin-left: 20px;
  .title {
    display: flex;
    height: 55px;
    li {
      font-size: 16px;
      color: #7a7f85;
      line-height: 55px;
      margin-right: 20px;
      &:first-child {
        color: rgb(66, 162, 235);
        cursor: pointer;
      }
    }
  }
  .content {
    width: 980px;
    background-color: #fff;
    border-radius: 6px;
    padding-top: 30px;
    p {
      font-weight: 700;
      font-size: 16px;
      color: #262c32;
      margin-left: 35px;
      border-left: 4px solid rgb(66, 162, 235);
      padding-left: 15px;
    }
    .stuwrite {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      /deep/ .el-input__inner {
        width: 300px;
      }
      span {
        width: 100px;
        text-align: right;
        margin-right: 15px;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        margin-left: 29px;
      }
      .jia {
        margin-bottom: 20px;
      }
      li {
        &:last-child {
          margin-bottom: 25px;
        }
      }
      .el-cascader {
        margin-top: 28px;
      }
      .gender {
        margin-left: 57px;
      }
    }
  }
  .commit {
    margin-top: 45px;
    text-align: center;
    .el-button {
      width: 120px;
      margin-right: 40px;
    }
  }
}
</style>