<template>
  <div class="header">
    <div class="title">
      <img src="../assets/logo_min.png" alt="" />
      <h2>大唐ICT云端实验室</h2>
    </div>
    <ul class="menus">
      <router-link to="/admin" tag="li"> 首页 </router-link>
      <router-link to="/systemmenus/usermanage" tag="li" active-class="active"> 系统管理 </router-link>
      <router-link to="/edumenus/studentmanage" tag="li" active-class="active"> 教务管理 </router-link>
      <li>资源库</li>
      <li>教研管理</li>
      <li>教学管理</li>
      <li>教学管理</li>
      <li>考试测评</li>
    </ul>
    <ul class="unlogin">
      <li>管理员</li>
      <li>|</li>
      <li>帮助</li>
      <li>|</li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: rgba(53, 55, 58, 1);
  display: flex;
  .title {
    height: 60px;
    display: flex;
    align-items: center;
    img {
      margin-left: 20px;
    }
    h2 {
      color: aliceblue;
      font-size: 18px;
      margin-left: 20px;
    }
  }
  .menus {
    display: flex;
    margin-left: 50px;
    flex-grow: 1;
    li {
      font-size: 14px;
      color: aliceblue;
      line-height: 60px;
      padding: 0 13px;
      cursor: pointer;
    }
     .active{
        border-bottom: 4px solid aliceblue;
        margin-bottom: 7px;
    }
  }
  .unlogin {
    display: flex;
    margin-right: 20px;
    li {
      font-size: 14px;
      color: aliceblue;
      line-height: 60px;
      padding: 0 5px;
      cursor: pointer;
    }
  }
}
</style>