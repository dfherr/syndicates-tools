<template>
  <md-app id="app">
    <md-app-drawer md-permanent="full">
      <SyndicatesDrawer />
    </md-app-drawer>
    <md-app-content>
      <transition mode="out-in">
        <router-view />
      </transition>
    </md-app-content>
  </md-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SyndicatesDrawer from './components/SyndicatesDrawer.vue'

export default defineComponent({
  name: 'App',
  components: {
    SyndicatesDrawer
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>