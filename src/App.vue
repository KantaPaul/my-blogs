<template>
  <div>
    <header-area></header-area>
    <router-view></router-view>
  </div>
</template>

<script>

import Blog from './components/Blog'
import Show from './components/Show'
import Header from './components/Header'

export default {
  components: {
    'blog-area': Blog,
    'show-area': Show,
    'header-area': Header
  }
}
</script>

<style>

</style>
