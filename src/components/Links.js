import React from "react"

const Links = props => {
  return (
    <div className="wrapper__right-wrapper">
      <h1 className="header-links">Links</h1>
      {props.posts.map(post => {
        return (
          <div key={post.node.id}>
            <h3 className="link-title">{post.node.frontmatter.title}</h3>
            <i className="link-date">{post.node.frontmatter.date}</i>
            <p className="link-description">
              {post.node.frontmatter.description}
            </p>
            <i className="fas fa-external-link-alt" />
            <a className="link-post" href={post.node.frontmatter.path}>
              View Post
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Links
