import React, { useEffect, useState } from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const Detail = () => {

    const {id} = useParams()

    async function GetDataByID(article_id){

        const docRef = doc(db, "market_news", article_id);
        const snapshot = await getDoc(docRef).then((snap)=>{
            if (!snap.exists()) throw new Error("not-found");
            return snap.data();
        })
        
        return snapshot
    }


    const [article,setArticle] = useState({})

    useEffect(()=>{
        GetDataByID(id).then(e => {
            setArticle(e)
        })
    },[id])

    if(Object.keys(article).length){


        const paragraphs = article.description.split('\n');
        const paragraphs_comm = article.expertComment.split('\n');



    
  return ( 
    <div className='detail'>
        <div className='container mt-5 d-flex align-items-start flex-column'>
            <h3 className='article_title'>{article.title}</h3>
            <div className="picture" style={{backgroundImage: `url(${article.imageUrl})`}}>
                
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

}

export default Detail