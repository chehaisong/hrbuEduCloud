<template>
  <div class="sidemenus">
    <h2>·系统管理</h2>
    <ul>
      <router-link to="/systemmenus/usermanage" tag="li" active-class="active"  >
        用户管理
      </router-link>
      <router-link to="/systemmenus/positionmanage" tag="li" active-class="active">
        职位管理
      </router-link>
      <!-- <li>职位管理</li> -->
      <li>角色管理</li>
      <li>菜单管理</li>
      <li>数据字典</li>
      <li>学校管理</li>
      <li>专业管理</li>
      <li>在线用户管理</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"SideMenus"
};
</script>

<style lang="less" scoped>
.sidemenus {
  // css中属性的计算
  // 源生css写法
  // height: calc(100vh-60px);
  // less写法
  height: (100vh-60px);
  // height: 100vh;
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