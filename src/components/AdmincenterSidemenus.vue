<template>
  <div class="sidemenus">
    <h2>·个人中心</h2>
    <ul>
      <router-link to="/admincentermenus/admincenter" tag="li" active-class="active">资料设置</router-link> 
      <router-link to="/admincentermenus/admincenterchangepassword" tag="li" active-class="active">修改密码</router-link> 
     
      
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "AdmincenterSidemenus",
};
</script>

<style lang="less" scoped>
.sidemenus {
  height: (100vh-60px);
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
    }
  }
}
</style>