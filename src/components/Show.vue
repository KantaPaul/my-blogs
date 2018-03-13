<template>
    <div v-layout:colum="'colum'" class="blog-wraper">
        <h1 class="display-4">All Blog Post</h1>
        <input type="search" placeholder="Search Blog" v-model="search">
        <p class="badge badge-primary" v-if="search.length > 0">Searching....</p>
        <div v-backgound v-for="(blog,index) in filterBlog" :key="index" class="single-blog">
          <h4>
            <router-link v-bind:to="'/blog/'+blog.id" target="_blank" v-rainbow>{{ blog.title | to-uppercase | char_length_50 }}</router-link>
          </h4>
          <p class="lead">{{ blog.massage | char_length }}</p>
        </div>
        <p class="badge badge-danger" v-if="filterBlog.length == 0">Not Found</p>
    </div>
</template>

<script>

import myMixing from '../miixng/mixing'

export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created () {
    this.$http.get('https://my-project-1472496602327.firebaseio.com/posts.json').then(function (data) {
      return data.json()
    }).then(function (data) {
      var blogArray = []
      for (var key in data) {
        data[key].id = key
        blogArray.unshift(data[key])
      }
      this.blogs = blogArray
    })
  },
  computed: {

  },
  mixins: [myMixing]
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.8;
}
.blog-wraper {
  max-width: 800px;
  margin: 20px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  background-color: #eee;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
input[type="search"] {
  width: 100%;
  display: block;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #333;
  padding: 0 20px;
  font-size: 1.2em;
}
ul , li{
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin-left: 10px;
}
.authors a {
  margin-right: 10px;
}
.badge {
  margin-bottom: 0;
  display: block;
  text-align: left;
  padding: 10px;
  border-radius: 0;
}
.badge-primary {
  margin: 2% 0;
}
</style>
