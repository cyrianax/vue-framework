<template>
  <div class="layout">
    <Top/>
    <div class="layout-main">
      <Side/>
      <div class="layout-view-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Side from './Side.vue'
import Top from './Top.vue'

export default {
  components: { Side, Top },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  >.layout-main {
    flex: auto;
    display: flex;
    >.layout-view-container {
      flex: auto;
    }
  }

}
</style>
