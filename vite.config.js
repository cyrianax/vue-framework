import vue from '@vitejs/plugin-vue'
import svgSprite from 'vite-plugin-svg-sprite'

export default {
  plugins: [
    vue(),
    svgSprite({
      include: '**/icons/*.svg'
    }),
  ],
  alias: [
    { find: '@', replacement: '/src' }
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$primary: #ed4844; $secondary: #5c4fc3; $border: 1px solid rgba($color: #000, $alpha: 0.05);`
      }
    }
  },
}
