<template>
  <div class="menus">
    <StudentHeader />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import StudentHeader from "../components/StudentHeader";
export default {
  name: "StudentMenus",
  components: {
    StudentHeader,

  },
};
</script>

<style lang="less" scoped>
// .menus{
//   background-color: #f3f5f7;
//   .main{
//     display: flex;
//     width: 1220px;
//     margin: 0 auto;
//   }
// }
</style>