<template>
  <div class="menus">
    <AdminHeader />
    <div class="main">
      <TeachmanageSidemenus />
      <router-view></router-view>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader";
import TeachmanageSidemenus from "../components/TeachmanageSidemenus";
import Footer from "../components/Footer";

export default {
  name: "MyMenus",
  components: {
    AdminHeader,
    TeachmanageSidemenus,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.menus {
  background-color: #f3f5f7;
  .main {
    display: flex;
    width: 1220px;
    margin: 0 auto;
  }
}
</style>