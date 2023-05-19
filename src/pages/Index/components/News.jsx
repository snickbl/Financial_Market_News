import React from 'react'
import './News.css'
import { Link } from 'react-router-dom';


const News = ({data}) => {

    const rows = [];
    let currentRow = [];
    
    data.forEach((item, index) => {
        currentRow.push(
          <div key={item.id} className="col-sm-4">
            <Link to={`/article/${item.id}`}>
            <div className="div-of-img">
                <img src={item.imageUrl} width='440px' height='299px' alt='news_picture'></img>

            </div>
            
                <div className='text'>
                    <h3 className='title'>{item.title}</h3>
                </div>  
            </Link>
          </div>
        );
    
        if ((index + 1) % 3 === 0 || index === data.length - 1) {
          rows.push(<div key={index} className="row mb-5">{currentRow}</div>);
          currentRow = [];
        }
      });
  
    return(
        <div className="container col-12 mt-5">

<div className="container col-12">{rows}</div>
               </div> 
    )
  }
  
export default News

