<template>
  <el-menu v-bind:router="true">
    <el-menu-item index="1" v-bind:route="{ name: 'home'}">
      <i class="el-icon-house"></i>
      <span>Home</span>
    </el-menu-item>
    <el-menu-item index="2" v-bind:route="{ name: 'research'}">
      <i class="el-icon-setting"></i>
      <span>Forschung</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'MainMenu',
}
</script>

<style scoped>
</style>