import React from 'react'
import './Detail.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const {id} = useParams()

    const news = useSelector(state => state.InfoSlice.news)

    let article = news[id]

    const paragraphs = article.description.split('\n');
    const paragraphs_comm = article.expertComment.split('\n');

    console.log(article.description)

    
  return ( 
    <div className='detail'>
        <div className='container mt-5 d-flex align-items-start flex-column'>
            <h3 className='article_title'>{article.title}</h3>
            <div className="picture" style={{backgroundImage: `url(${article.imageUrl})`}}>
                {/* <img src={article.imageUrl} alt="photo"/> */}
            </div>
            <div className="description">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="comment">
                <h4 className='exp_comment'>
                    Experts Comment
                </h4>
                <br/>
                {paragraphs_comm.map((paragraphs, index) => (
                    <p key={index}>{paragraphs}</p>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Detail