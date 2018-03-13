import Show from './components/Show'
import Blog from './components/Blog'
import SingleBlog from './components/SingleBlog'

export default [
  {path: '/', component: Show},
  {path: '/add', component: Blog},
  {path: '/blog/:id', component: SingleBlog}
]
