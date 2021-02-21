<template>
  <div class="layout-top">
    <div class="top-start">
      <!-- <img src="/src/assets/images/logo.png" alt="大拙教务"> -->
      <!-- <app-icon type="ApplicationEffect" theme="outline" size="20" fill="#fff" :strokeWidth="5"/> -->
      <!-- <span>大拙教务</span> -->
      <span>Template</span>
    </div>
    <div class="top-bar">
      <div class="top-collapse">
        <app-icon name="menu-fold-one" size="22" fill="#00000076" :strokeWidth="3"/>
      </div>
      <div class="top-menu">
        <div class="top-menu-item" title="首页">
          <!-- <app-icon type="Home" theme="outline" size="16" fill="#fff"/> -->
        </div>
        <div class="top-menu-item" title="系统设置">
          <!-- <app-icon type="SettingTwo" theme="outline" size="16" fill="#fff"/> -->
        </div>
      </div>
    </div>
    <div class="top-user">
      <img :src="user.avatar">
      <span>{{user.nickname}}</span>
      <!-- <app-icon type="Down" theme="outline" size="16" fill="#fff"/> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import storage from '@/utils/storage.js'
// import { ApplicationEffect, MenuUnfoldOne, Home, SettingTwo, Down } from '@icon-park/vue-next'

const user= ref(JSON.parse(storage.user))

</script>

<style lang="scss" scoped>
@font-face {
  font-family: Round;
  src: url('../../assets/fonts/HYZhongYuanJ.ttf');
}

.layout-top {
  height: 44px;
  background: $secondary;
  display: flex;
  justify-content: space-between;

  .top-start {
    display: flex;
    align-items: center;
    min-width: 160px;
    padding: 0 16px;

    .i-icon {
      height: 20px;
      margin-right: 8px;
    }

    img {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }

    span {
      font-family: Round;
      color: #ffffffdf;
      font-size: 18px;
    }
  }

  .top-bar {
    flex: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-collapse {
      width: 44px;
      height: 44px;
      border-left: 1px solid rgba($color: #000, $alpha: 0.15);
      border-right: 1px solid rgba($color: #000, $alpha: 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      span {
        height: 24px;
      }
    }

    .top-menu {
      display: flex;
      padding-right: 16px;
      .top-menu-item {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba($color: #000, $alpha: 0.15);
        border-radius: 100%;
        margin-left: 8px;
        cursor: pointer;

        span {
          height: 16px;
        }
      }
    }
  }

  .top-user {
    display: flex;
    align-items: center;
    border-left: 1px solid rgba($color: #000, $alpha: 0.15);
    padding: 0 16px;
    cursor: pointer;

    span {
      font-size: 14px;
      color: #ffffffbf;
    }

    img {
      width: 28px;
      height: 28px;
      border-radius: 100%;
      margin-right: 8px;
    }
  }
}
</style>
