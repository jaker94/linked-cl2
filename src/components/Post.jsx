import React from 'react'

function Post({post}) {
  return (
    <div>
    <img src={post.photoUrl} alt="" />
    <h4></h4>
    </div>
  )
}

export default Post