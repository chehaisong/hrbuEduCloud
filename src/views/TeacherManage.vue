<template>
  <div class="teachermanage">
    <p>教师管理</p>
     <el-row>
      <el-button type="primary" size="medium">新增教师*</el-button>
      <el-button
        @click="resetPassword"
        size="medium"
        :disabled="!multipleSelection.length"
        >重置密码</el-button
      >
      <el-button
        size="medium"
        @click="disable(0)"
        :disabled="!multipleSelection.length"
        >禁用</el-button
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
        <span>用户状态</span>
        <el-select
          v-model="userState"
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
        <span class="ml20">创建日期</span>
        <el-date-picker
          size="medium"
          v-model="time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
        <span class="ml20">关键字</span>
        <el-input
          placeholder="请输入内容"
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
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="60"> </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="major"
          label="所属专业"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="class"
          label="授课班级"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="200"
        ></el-table-column>
        <!-- show-overflow-tooltip -->
        <el-table-column
          prop="state"
          label="状态"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="ts"
          label="创建时间"
          width="170"
        ></el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!-- :page-sizes="[3,20,50]" -->
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
import dayjs from "dayjs";
export default {
  name: "TeacherManage",
  data() {
    return {
      options: [
        {
          value: 2,
          label: "全部",
        },
        {
          value: 1,
          label: "有效",
        },
        {
          value: 0,
          label: "禁用",
        },
      ],
      userState: 2,
      time: "",
      searchInput: "",
      tableData: [],
      multipleSelection: [],
      currentPage4: 4,
      total: 0,
      pageSize: 10,
      pageNum: 1,
      // emailList:[],
    };
},
 mounted() {
    //默认调用获取用户信息接口
    this.getUserInfo();
  },
  methods: {
    getUserInfo(data) {
      console.log("data", data);
      // 接口复用，判断有无参数，再决定参数是否传递
      const obj = {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
      };
      if (data) {
        obj.params = { ...obj.params, ...data };
      }
      //默认调用获取用户信息接口
      axios
        .get("/api/teacher/userinfo", obj)
        .then((response) => {
          console.log(response);
          this.tableData = response.data.data.results;
          this.total = response.data.data.total;

          // this.tableData.map((item) => {
          //   //格式化时间
          //   item.ts = this.FormatTime(item.ts, "");
          //   item.gender = item.gender == 1 ? "男" : "女";
          //   item.state = item.state == 1 ? "有效" : "禁用";
          // });
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
      console.log(`每页 ${val}条`);
      this.search();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.search();
    },
    // 重置密码
    resetPassword() {
      console.log(this.multipleSelection);
      const userIdArr = [];
      const emailList = [];
      this.multipleSelection.forEach((item) => {
        // 如果用户禁用则不向后台发送对应用户数据
        if (item.state === "有效") {
          userIdArr.push(item.id);
          emailList.push(item.email);
        }
      });
      console.log(userIdArr, emailList);
      axios
        .post("/api/teacher/resetpassword", {
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
        if (item.state === "有效" && !state) {
          userIdArr.push(item.id);
        } else if (item.state === "禁用" && state) {
          userIdArr.push(item.id);
        }
      });
      axios
        .post("/api/teacher/disableOractivatedUser", {
          userIds: userIdArr,
          state,
        })
        .then((response) => {
          const msg = {
            // message: '禁用/激活用户成功',
            type: "success",
          };
          if (!state) {
            msg.message = "禁用用户成功";
          } else {
            msg.message = "激活用户成功";
          }
          this.$message(msg);
          this.search();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    search() {
      const data = {};
      if (this.userState == 1 || this.userState == 0) {
        data.userState = this.userState;
      }
      if (this.time) {
        data.startTime = dayjs(this.time[0]).format("YYYY-MM-DD HH:mm:ss");
        data.endTime = dayjs(this.time[1]).format("YYYY-MM-DD HH:mm:ss");
      }
      if (this.searchInput) {
        data.searchInput = this.searchInput;
      }
      this.getUserInfo(data);
    },
}
}
</script>

<style lang="less" scoped>
.teachermanage {
  margin-left: 20px;
  width: 100%;
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
        margin-right: 10px;
      }
      .ml20 {
        margin-left: 20px;
      }
      .el-select {
        width: 95px;
      }
      .el-date-picker {
        width: 300px;
      }
      .el-input {
        width: 187px;
      }
      .el-button {
        margin-left: 20px;
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
