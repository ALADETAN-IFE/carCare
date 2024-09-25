import React from 'react'
import "../Blog/BlogArticle.css"

const BlogArticle = () => {
  return (
    <div className='blog__article'>
        <div className="article__container">
            <h1>Popular Topics</h1>
            <div className='article__view'>
                 <p> View all</p>
            </div>
            <div className="article__columns">
                <div className='articles'>
                    <div className='article__img'>
                        <div className='art__img'></div>
                        <p className='article__date'>08.08.2024</p>
                    </div>
                    <h1>How To choose the right mechanic for your car</h1>
                    <p className='article__text'> Finding a trusted mechanic can be daunting. Here’s 
                    what to look for when selecting the best expert for....</p>
                    <p>[Read More]</p>

                </div>
                <div className='articles'>
                    <div className='article__img'>
                        <div className='art__img'></div>
                        <p className='article__date'>08.08.2024</p>
                    </div>
                    <h1>How To choose the right mechanic for your car</h1>
                    <p className='article__text'> Finding a trusted mechanic can be daunting. Here’s 
                    what to look for when selecting the best expert for....</p>
                    <p>[Read More]</p>

                </div>
                <div className='articles'>
                    <div className='article__img'>
                        <div className='art__img'></div>
                        <p className='article__date'>08.08.2024</p>
                    </div>
                    <h1>How To choose the right mechanic for your car</h1>
                    <p className='article__text'> Finding a trusted mechanic can be daunting. Here’s 
                    what to look for when selecting the best expert for....</p>
                    <p>[Read More]</p>

                </div>
                <div className='articles'>
                    <div className='article__img'>
                        <div className='art__img'></div>
                    <p className='article__date'>08.08.2024</p>
                    </div>
                    <h1>How To choose the right mechanic for your car</h1>
                    <p className='article__text'> Finding a trusted mechanic can be daunting. Here’s 
                    what to look for when selecting the best expert for....</p>
                    <p>[Read More]</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogArticle