<template>
  <el-container>
    <el-header>
      <span style="font-size: 30px; float: left;">Syndicates</span>

      <el-menu
        style="float: right;"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
        :default-active="$route.path"
      >
        <el-menu-item :route="{ name: 'research' }">
          <i class="el-icon-setting"></i>
          <span>Forschung</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-container>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition>
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
</script>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.el-header,
.el-footer {
  background-color: #545c64;
  color: #ffd04b;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
