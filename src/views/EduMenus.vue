<template>
  <div class="menus">
    <AdminHeader />
    <div class="main">
      <EduSideMenus />
      <router-view></router-view>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader";
import EduSideMenus from "../components/EduSidemenus"
import Footer from "../components/Footer";

export default {
  name: "EduMenus",
  components: {
    AdminHeader,
    EduSideMenus,
    Footer
  },
};
</script>

<style lang="less" scoped>
.menus{
  background-color: #f3f5f7;
  .main{
    display: flex;
    width: 1220px;
    margin: 0 auto;
  }
}
</style>