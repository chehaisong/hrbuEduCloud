<template>
  <div class="menus">
    <AdminHeader />
    <div class="main">
      <AdmincenterSidemenus />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader";
import AdmincenterSidemenus from "../components/AdmincenterSidemenus"

export default {
  name: "AdmincenterMenus",
  components: {
    AdminHeader,
    AdmincenterSidemenus,
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