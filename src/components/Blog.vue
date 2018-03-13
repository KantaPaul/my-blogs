<template>
  <div id="add-blog" v-layout:colum="''" class="border rounded">
    <form action="#" v-if="!submited">
        <h1>Add A blog post</h1>
        <p>
            <input type="text" placeholder="Type your blog post title" class="form-control" v-model="blog.title" id="title">
        </p>
        <p>
            <textarea name="massage" placeholder="Add blog content" class="form-control" id="massage" v-model="blog.massage" cols="30" rows="10"></textarea>
        </p>
        <div id="checkboxes">
          <div>
            <label for="kanta">Kanta</label>
            <input type="checkbox" value="Kanta" v-model="blog.categories" id="kanta">
          </div>
          <div>
            <label for="pobon">Pobon</label>
            <input type="checkbox" value="Pobon" v-model="blog.categories" id="pobon">
          </div>
          <div>
            <label for="chandra">Chandra</label>
            <input type="checkbox" value="Chandra" v-model="blog.categories" id="chandra">
          </div>
          <div>
            <label for="paul">Paul</label>
            <input type="checkbox" value="Paul" v-model="blog.categories" id="paul">
          </div>
        </div>
        <div id="author-name">
          <select v-model="blog.author" class="form-control">
            <option v-for="(author,index) in blog.authors" :key="index">{{ author }}</option>
          </select>
        </div>
        <br>
        <div>
          <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="post">Add Blog</button>
        </div>
    </form>
    <br>
    <div v-if="submited">
      <h2 class="display-4 text-capitalize">Thanks For submited</h2>
    </div>
    <hr>
    <br>
    <div id="preview">
        <h2>Blog Preview</h2>
        <hr>
        <br>
        <p>Preview title : <strong>{{ blog.title }}</strong></p>
        <p>Blog Text : <strong>{{ blog.massage }}</strong> </p>
        <div class="media">
          <p>Blog Category: </p>
          <ul>
            <li v-for="(category,index) in blog.categories" v-bind:key="index"><strong>{{ category }}</strong></li>
          </ul>
        </div>
        <p>Blog Author: <strong>{{ blog.author }}</strong> </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: '',
        massage: '',
        categories: [],
        images: '',
        authors: ['Kanta', 'Paul', 'Pobon']
      },
      submited: false
    }
  },
  methods: {
    post: function () {
      this.$http.post('https://my-project-1472496602327.firebaseio.com/posts.json', this.blog).then(function (data) {
        this.submited = true
      })
    }
  }
}
</script>

<style scoped>

</style>
