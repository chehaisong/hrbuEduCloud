<template>
  <div class="positionmanage">
    <p>职位管理</p>
    <div class="main">
      <div style="margin-bottom: 30px">
        <el-radio-button disabled label="-"></el-radio-button>
        <span>中科安高</span>
      </div>
      <ul class="style" style="margin-left: 40px">
        <li>
          <el-radio-button label="-"></el-radio-button>
          院长
        </li>
        <ul style="margin-left: 40px">
          <li>
            <el-radio-button label="-"></el-radio-button>
            计算机系主任
          </li>
          <ul style="margin-left: 40px">
            <li>
              <el-radio-button label="-"></el-radio-button>
              教师
            </li>

            <li>
              <el-radio-button label="-"></el-radio-button>
              辅导员
            </li>
          </ul>
        </ul>
        <ul style="margin-left: 40px">
          <li>
            <el-radio-button label="-"></el-radio-button>
            系主任
          </li>
          <ul style="margin-left: 40px">
            <li>
              <el-radio-button label="-"></el-radio-button>
              教师
            </li>

            <li>
              <el-radio-button label="-"></el-radio-button>
              辅导员
            </li>
          </ul>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.positionmanage {
  margin-left: 20px;
  width: 100%;
  height: 100vh;
  p {
    color: #7a7f85;
    line-height: 56px;
  }
  span {
    font-style: normal;
    font-size: 18px;
  }
  /deep/ .el-radio-button__inner {
    width: 18px;
    height: 18px;
    padding: 0;
    margin-right: 15px;
  }
  .main {
    width: 960px;
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    li {
      padding-bottom: 30px;
    }
    .style {
    }
  }
}
</style>