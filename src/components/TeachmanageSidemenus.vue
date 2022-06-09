<template>
  <div class="sidemenus">
      <h2>·教学管理</h2>
      <ul>
          <li>实验报告</li>
          <router-link to="" tag="li" active-class="active">课程发布</router-link>
          <li>学习记录</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"TeachmanageSidemenus"
}
</script>

<style lang="less" scoped>
.sidemenus{
    height: (100vh-60px);
    background-color: #f3f5f7;
   h2 {
    width: 190px;
    line-height: 50px;
    font-weight: 700;
    font-size: 18px;
    color: #262c32;
    padding-left: 10px;
    background-color: white;
  }
  
  ul {
    border-top: 2px solid #e8e9eb;
    background-color: white;
    width: 200px;
    
    li {
      color: #262c32;
      line-height: 50px;
      padding-left: 20px;
      cursor: pointer;
    }
    li:hover{
        background-color: rgb(223 241 255);
        color:#4ea6ea;
        text-decoration: underline;
    }
    .active {
        border-left: 4px solid rgb(66, 162, 235);
    //   background-color: rgb(66, 162, 235);
    }
  }
}
</style>