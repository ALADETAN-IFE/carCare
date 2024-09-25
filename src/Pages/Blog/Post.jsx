import React from 'react'
import "../Blog/BlogArticle.css"
import "../Blog/Post.css"


const Post = () => {
  return (
    <div className='post__article'>
        <div className="post__container">
            <h1>Popular Topics</h1>
            
            <div className="post__columns">
                <div className='post'>
                    <p className='post__date'>08.08.2024</p>
                    <h1>How to Spot Early Signs of Engine Trouble</h1>
                    <p className='post__text'>Is your engine making strange noises or losing power? Learn how to identify warning signs before they turn into costly repairs</p>

                </div>
                <div className='post'>
                    <p className='post__date'>08.08.2024</p>
                    <h1>How to Spot Early Signs of Engine Trouble</h1>
                    <p className='post__text'>Is your engine making strange noises or losing power? Learn how to identify warning signs before they turn into costly repairs</p>

                </div>
                <div className='post'>
                    <p className='post__date'>08.08.2024</p>
                    <h1>How to Spot Early Signs of Engine Trouble</h1>
                    <p className='post__text'>Is your engine making strange noises or losing power? Learn how to identify warning signs before they turn into costly repairs</p>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Post