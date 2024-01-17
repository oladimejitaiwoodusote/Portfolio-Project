import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';



function App() {
  return (
    <div className='App'>
      <Navbar/>   
      <div className='App-content'>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/projects" element={<Projects/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
