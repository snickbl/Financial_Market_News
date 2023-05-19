import './App.css';
import Header from './Components/Header/Header';
import Index from './pages/Index/Index';
import { Navigate, Route, Routes } from 'react-router-dom';
import Detail from  './pages/Detail/Detail'


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/articles'/>}/>
        <Route path='articles' element={<Index/>}/>
        <Route path='/article/:id' ex element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
