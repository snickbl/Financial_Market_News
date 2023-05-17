import React from 'react'
import './Index.css'
import News from './components/News'
import { useSelector } from 'react-redux'
import InfoSlice from '../../ReduxToolkit/reducers/InfoSlice'


const Index = () => {

  const {news} = useSelector(state => state.InfoSlice)

  console.log(news)

  return (
    <div className='index'>
        <News data={news}/>
        
    </div>
  )
}

export default Index