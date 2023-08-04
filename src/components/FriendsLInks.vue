<template>
  <div class="list">
    <div class="title">友情链接</div>
    <MyLinks title="文档" :links="links"></MyLinks>
    <MyLinks title="组件" :links="components"></MyLinks>
    <MyLinks title="社区" :links="shequ"></MyLinks>

  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import MyLinks from '@/components/MyLinks.vue'

const links = ref([
  {
    name: 'vue3',
    icon: 'vue3.svg',
    url: 'https://cn.vuejs.org/guide/introduction.html'
  },
  {
    name: 'vue-router',
    icon: 'vue3.svg',
    url: 'https://router.vuejs.org/zh/introduction.html'
  },
  {
    name: 'pinia',
    icon: 'pinia.svg',
    url: 'https://pinia.vuejs.org/zh/core-concepts/'
  },
  {
    name: 'vue3工具链',
    icon: 'vite.svg',
    url: 'https://cn.vuejs.org/guide/scaling-up/tooling.html'
  }
])

const components = reactive([
  {
    name: 'antDesignVue',
    icon: 'antDesignVue.svg',
    url: 'https://www.antdv.com/components/overview/'
  },
  {
    name: 'elementPlus',
    icon: 'element.png',
    url: 'https://element-plus.gitee.io/zh-CN/'
  },
  {
    name: 'naiveUI',
    icon: 'naive.svg',
    url: 'https://www.naiveui.com/zh-CN/os-theme/docs/installation'
  },
  {
    name: 'vantUI',
    icon: 'vant.png',
    url: 'https://vant-contrib.gitee.io/vant/#/zh-CN'
  }
])

const shequ = reactive([
  {
    name: '掘金',
    icon: 'juejin.png',
    url: 'https://www.antdv.com/components/overview/'
  },
  {
    name: '知乎',
    icon: 'zhihu.png',
    url: 'https://element-plus.gitee.io/zh-CN/'
  }

])


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
