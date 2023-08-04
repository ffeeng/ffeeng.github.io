<template>
  <div class="box">

    <div class="top">
      <TopBar></TopBar>
    </div>
    <div class="container">
      <LeftContent style="flex:1"></LeftContent>
      <div class="right">
        <FriendsLink></FriendsLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TopBar from '@/views/TopBar.vue'
import LeftContent from '@/views/LeftContent.vue'
import FriendsLink from '@/components/FriendsLInks.vue'

const aa = ref(1)
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .container {
    flex: 1;
    display: flex;

    .left {
      flex: 1;

    }

    .right {
      width: 500px;
    }
  }

}
</style>
