<template>
  <div class="about">
    <el-input v-model="input" placeholder="请输入内容" @change="change"></el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')

function change() {
  console.log(input)
}
</script>


<style lang="scss" scoped>
div {
  width: 100%
}
</style>
