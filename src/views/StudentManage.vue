<template>
  <div class="studentmanage">
    <p>学生管理</p>
    <el-row>
      <router-link to="/edumenus/addstudent" tag="span">
      <!-- <router-link to="/edumenus/studentmanage/addstudent" tag="span"> -->
        <el-button type="primary" size="medium">新增学生*</el-button>
      </router-link>
      <!-- <router-view></router-view> -->
      <el-button type="primary" size="medium">批量导入</el-button>
      <el-button
        size="medium"
        @click="resetPassword"
        :disabled="!multipleSelection.length"
        >重置密码</el-button
      >
      <el-button
        size="medium"
        @click="disable(0)"
        :disabled="!multipleSelection.length"
        >结课</el-button
      >
      <el-button
        size="medium"
        @click="disable(1)"
        :disabled="!multipleSelection.length"
        >激活</el-button
      >
    </el-row>

    <div class="content">
      <el-row>
        <span>所属专业</span>
        <el-select
          class="major"
          v-model="major"
          clearable
          size="medium"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <span>状态</span>
        <el-select
          class="state"
          v-model="studentState"
          clearable
          size="medium"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span class="ml20">关键字</span>
        <el-input
          placeholder="请输入学生学籍号"
          v-model="searchInput"
          size="medium"
          clearable
        >
        </el-input>
        <el-button @click="search" type="primary" size="medium">搜索</el-button>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @cell-dblclick="studentCheck"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column prop="num" label="序号" width="50"> </el-table-column>
        <el-table-column prop="code" label="学籍号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="学生姓名" width="80">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="50">
        </el-table-column>
        <el-table-column prop="studentclass" label="班级" width="150">
        </el-table-column>
        <el-table-column prop="major" label="专业" width="100">
        </el-table-column>
        <el-table-column prop="school" label="学校" width="140">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="50">
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentManage",
  data() {
    return {
      options: [
        {
          value: 2,
          label: "全部",
        },
        {
          value: 1,
          label: "激活",
        },
        {
          value: 0,
          label: "结课",
        },
      ],
      options1: [
        {
          value: "软件工程",
          label: "软件工程",
        },
        {
          value: "计算机",
          label: "计算机",
        },
      ],
      studentState: 2,
      major: "",
      searchInput: "",
      tableData: [],
      multipleSelection: [],
      currentPage4: 4,
      total: 0,
      pageSize: 10,
      pageNum: 1,
    };
  },
  mounted() {
    // 默认调用获取学生信息接口
    this.getStudentInfo();
  },

  methods: {
      //获取学生信息
    getStudentInfo(data) {
      console.log("data", data);
    //   接口复用，判断有无参数，再决定参数是否传递
      const obj = {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
      };
      if (data) {
        obj.params = { ...obj.params, ...data };
      }
      //默认调用获取学生信息接口
      axios
        .get("/api/student/studentinfo",obj)
        .then((response) => {
          console.log(response);
          this.tableData = response.data.data.results;
          this.total = response.data.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
  },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      // this.search();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      // this.search();
    },

    //重置密码
    resetPassword() {
      console.log(this.multipleSelection);
      const userIdArr = [];
      const emailList = [];
      this.multipleSelection.forEach((item) => {
        // 如果用户禁用则不向后台发送对应用户数据
        if (item.state === "激活") {
          userIdArr.push(item.id);
          emailList.push(item.email);
        }
      });
      console.log(userIdArr, emailList);
      axios
        .post("/api/student/resetpassword", {
          userIds: userIdArr,
          emailList,
        })
        .then((response) => {
          // console.log(response.data.state);
          if (response.data.state) {
            this.$message({
              showClose: true,
              message: "重置密码成功",
              type: "success",
            });
          }else{
            this.$message({
              showClose: true,
              message: response.data.message,
              type: "error",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 禁用账户
    disable(state) {
      const userIdArr = [];
      this.multipleSelection.forEach((item) => {
        console.log(item);
        // 如果用户禁用则不向后台发送对应用户数据
        if (item.state === "激活" && !state) {
          userIdArr.push(item.id);
        } else if (item.state === "结课" && state) {
          userIdArr.push(item.id);
        }
      });
      axios
        .post("/api/student/disableOractivatedUser", {
          userIds: userIdArr,
          state,
        })
        .then((response) => {
          const msg = {
            type: "success",
          };
          if (!state) {
            msg.message = "学生结课成功";
          } else {
            msg.message = "学生激活成功";
          }
          this.$message(msg);
          this.search();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    // 搜索功能
    search(){
    const data = {};
    // console.log("用户状态", this.studentState);
      if (this.studentState == 1 || this.studentState == 0) {
        data.studentState = this.studentState;
      }
      if (this.major) {
        data.major = this.major;
      }
      if (this.searchInput) {
        data.searchInput = this.searchInput;
      }
    console.log(data);
    this.getStudentInfo(data);
    },
    // 跳转到查看学生信息页面
    studentCheck(val){
      console.log("val",val);
      this.multipleSelection = val;
      this.$router.push({
        name:"StudentCheck",
        query:{...this.multipleSelection},
      });
    }
  },

  
};
</script>

<style lang="less" scoped>
.studentmanage {
  margin-left: 20px;
  width: 100%;
//   height: 100vh;
  p {
    color: #7a7f85;
    line-height: 56px;
  }
  .el-button {
    margin-left: 5px;
  }
  .content {
    width: 960px;
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    .el-row {
      span {
        font-size: 14px;
        color: #262c32;
        line-height: 36px;
        margin: 0px 15px;
      }
      .major{
        width: 150px;
        margin-right: 20px;
      }
      .state {
        width: 95px;
        margin-right: 20px;
      }
      .el-input {
        width: 187px;
      }
      .el-button {
        margin-left: 15px;
      }
    }
    .el-table {
      margin-top: 20px;
      /deep/.el-table__header-wrapper {
        .el-table__cell {
          background-color: #f3f5f7;
          
        }
      }
      /deep/ .el-table__cell {
        padding: 6px 0;
        border-left: 1px solid #ebeef5;
        text-align: center;
        &:last-child {
          border-right: 1px solid #ebeef5;
        }
      }
      .cell {
        padding: 0px;
      }
    }
  }
  .pagination {
    width: 570px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 240px;
    background-color: #fff;
    float: right;
    .el-pagination {
      margin: 10px 0 0 20px;
    }
  }
}
</style>