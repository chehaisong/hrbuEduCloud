<template>
  <div>
    <StudentHeader />
    <h1>学生端首页</h1>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import StudentHeader from "../components/StudentHeader.vue";
export default {
  name: "StudentIndex",
  components: {
    StudentHeader,
  },
};
</script>

<style>
</style>