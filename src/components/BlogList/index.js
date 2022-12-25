import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {eachBlogList} = props

  return (
    <ul className="blog-list">
      {eachBlogList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
