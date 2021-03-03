<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">Accounts</md-toolbar>

    <md-list>
      <md-list-item key="forschung" to="{ path: `/forschung`}">
        <div class="md-list-item-text">
          <span class="md-list-item-text">Forschungsplan</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'SyndicatesDrawer',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
