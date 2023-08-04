<template>
  <div class="item">
    <div class="link-title">{{ title }}</div>
    <div class="links">
      <a class="link" :href="link.url" :key="link.name" target="_blank" v-for="link in  links ">
        <img :src="require('@/assets/' + link.icon)" alt="">
        <span class="link-name">{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  links: { name: string, icon: string, url: string }[]
}>()
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .item {
    margin-top: 16px;
  }
}

.title {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}

.link-title {
  font-size: 18px;
  text-align: left;
}

.links {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;

  .link {
    margin-right: 10px;
    text-decoration: none;
    color: black;
    font-size: 16px;
    display: flex;
    justify-items: center;
    padding: 4px;
    border-radius: 4px;

    &:hover {
      background-color: #E9F7F2;
    }

    img {
      width: 20px;
      height: 20px;
    }

    .link-name {
      margin-left: 4px;
    }
  }

}
</style>
