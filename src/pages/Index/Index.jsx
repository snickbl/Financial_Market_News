import React from 'react'
import './Index.css'
import News from './components/News'
import { useSelector } from 'react-redux'
import {GetData} from '../../GetData'


const Index = () => {

  const {news} = useSelector(state => state.InfoSlice)

  GetData()

  return (
    <div className='index'>
        <News data={news}/>
        
    </div>
  )
}

export default Index