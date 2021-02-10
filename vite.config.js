import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  alias: [
    { find: '@', replacement: '/src' }
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$primary: orange; $secondary: red;`
      }
    }
  }
}
