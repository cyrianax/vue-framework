<template>
  <div class="layout-side">
    <Menu :data="menu"/>
  </div>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: { Menu },
}
</script>

<style lang="scss">
.layout-side {
  width: 160px;
  box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.08);
}
</style>
