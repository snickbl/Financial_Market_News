import React from 'react'
import './News.css'
import { Link } from 'react-router-dom';


const News = ({data}) => {

    const rows = [];
    let currentRow = [];
    
    data.forEach((item, index) => {
        currentRow.push(
          <div key={index} className="col-sm-4">
            <div className="div-of-img">
                <img src={item.imageUrl} width='440px' height='299px'></img>

            </div>
            <Link to={`/article/${index}`}>
                <div className='text'>
                    <h3 className='title'>{item.title}</h3>
                </div>  
            </Link>
            {/* Здесь размещаете содержимое элемента */}
            {/* <h3>{item.title}</h3>
            <p>{item.description}</p>
            ... */}
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
        {/* {
            data.data.map((element, index)=>{
                if(index%3 === 0 && index!==0){
                    
                    return(
                        <>
                            <div className="w-100"></div>
                            <div className="col-sm article mx-3">
                                <img src={element.imageUrl} width='420px' height='299px'></img>
                                    <div>
                                        <h3 className='title'>{element.title}</h3>
                                        <h6><a href='https://www.reuters.com/article'></a></h6>
                                    </div>  
                            </div>
                        </>
                    )
                } 
                return(
                    <div className="col-sm article  mx-3">
                        <img src={element.imageUrl} width='420px' height='299px'></img>
                            <div className='title'>
                                <h3>{element.title}</h3>
                                <h6><a href='https://www.reuters.com/article'></a></h6>
                            </div>  
                    </div>
                )
            })
        } */}
     
        {/* {
            data.data.map((element, index) => {
                return(
                    <div className="col-sm article  mx-3">
                        <img src={element.imageUrl} width='420px' height='299px'></img>
                            <div className='title'>
                                <h3>{element.title}</h3>
                                <h6><a href='https://www.reuters.com/article'></a></h6>
                            </div>  
                    </div>
                )
            })
        }
        */}
 



        </div> 
    )
  }
  
export default News



/* <div className='article'>
                        <img src={element.imageUrl} width='420px' height='299px'></img>
                        <div>
                            <h3 className='title'>{element.title}</h3>
                            <h6><a href='https://www.reuters.com/article'></a></h6>
                        </div>
                    </div> */