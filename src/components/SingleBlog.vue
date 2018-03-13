<template>
  <div id="single_blog" class="border rounded">
    <h1 class="display-4 text-capitalize" v-rainbow>{{ blog.title }}</h1>
    <article>{{ blog.massage }}</article>
    <p><strong>Author :</strong> {{ blog.author }} </p>
    <div class="cate">
      <strong>Categories :</strong>
      <span v-for="(categorie, index) in blog.categories" :key="index">
        <a href="#">{{ categorie }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created () {
    this.$http.get('https://my-project-1472496602327.firebaseio.com/posts/' + this.id + '.json').then(function (data) {
      return data.json()
    }).then(function (data) {
      this.blog = data
      console.log(data)
    })
  }
}
</script>

<style scoped>
#single_blog {
  width: 900px;
  margin: 10px auto;
  background-color: #eeeeee;
  padding: 30px;
}
.cate span a {
  margin-right: 10px;
}
article {
  margin-bottom: 20px;
}
</style>
