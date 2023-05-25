import React from 'react'

function Post({ post,  modalPost}) {
  return (
    <div className={'bg-white dark:bg-[#1D2226]'}>
    <img src={post.photoUrl} alt="" />
    <h4>{post.input}</h4>
    </div>
  )
}

export default Post