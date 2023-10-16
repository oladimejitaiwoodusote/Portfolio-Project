import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/Home'


function App() {
  return (
    <div className='App'>
      <Navbar/>   
      <div className='App-content'>
          <Routes>
             <Route path="/" element={<Home/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
