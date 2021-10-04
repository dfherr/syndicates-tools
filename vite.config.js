import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  base: '/syndicates-tools/',
  build: {
    outDir: 'docs',
  },
}
