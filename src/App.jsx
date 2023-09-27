import './App.css'
import Card from './components/Card'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/home'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Card' element={<Card/>}/>
      </Routes>
      
    </div>
  )
}

export default App
