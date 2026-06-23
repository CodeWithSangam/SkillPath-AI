import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Contact from './components/layout/Contact';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
  
}
export default App