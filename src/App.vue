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
        <el-menu-item index="/research" :route="{ name: 'research' }">
          <i class="el-icon-setting"></i>
          <span>Forschung</span>
        </el-menu-item>
        <el-menu-item index="/espionage" :route="{ name: 'espionage' }">
          <i class="el-icon-camera"></i>
          <span>Spionage</span>
        </el-menu-item>
      </el-menu>
    </el-header>
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
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

onMounted(() => {
  const router = useRouter();
  const path = localStorage.getItem('path');
  if (path) {
    console.log('Navigate to:', path)
    localStorage.removeItem('path');
    router.push({ path });
  }
});
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
