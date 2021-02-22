<template>
  <el-menu :default-active="activeIndex" class="layout-menu" @select="handleSelect" router>
    <template v-for="item in menu" :key="item.path">
      <el-submenu :index="item.path" v-if="item.children">
        <template #title>
          {{item.title}} 
        </template>
        <el-menu-item  v-for="child in item.children" :key="child.path" :index="child.path">{{child.title}}</el-menu-item>
      </el-submenu>      
      <el-menu-item :index="item.path" v-else>
        <template #title>
          {{item.title}}  
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { ref, computed } from 'vue'
// import { route } from 'vue-router'

export default {
  setup () {

    const menu = ref([
      {
        title: '工作台',
        path: '/home',
      },
      {
        title: '学员管理',
        path: '/affairs/student',
      },

      {
        title: '课程安排',
        path: '/affairs/course',
      },

      {
        title: '预约查询',
        path: '/affairs/course',
      },
    ])

    const activeIndex = computed(() => {
      return ''
    })

    return {
      menu,
      activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-menu {
  border-right: none;
  >.el-menu-item {
    border-bottom: $border;
    height: 44px;
    line-height: 44px;
    padding: 0 16px!important;
  }
  >.el-submenu {
    border-bottom: $border;
    &:deep(.el-submenu__title) {
      height: 44px;
      line-height: 44px;
    }

    &:deep(.el-menu-item) {
      min-width: none!important;
    }

    .el-menu-item {
      min-width: none!important;
    }
  }
}
</style>
