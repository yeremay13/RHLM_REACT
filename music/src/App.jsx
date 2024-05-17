import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Views from './pages/Views';
import Albums from './pages/Albums';
import Foro from './pages/Foro';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Views' element={<Views />} />
        <Route path='/Albums' element={<Albums />} />
        <Route path='/Foro' element={<Foro />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
