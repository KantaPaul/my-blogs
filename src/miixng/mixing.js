export default {
  computed: {
    filterBlog () {
      return this.blogs.filter((blog) => {
        return blog.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
