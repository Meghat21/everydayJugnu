
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header';
import Projects from './Pages/Projects';
import FooterBlog from './Components/FooterBlog';

function App() {

  return (
    <div >
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <FooterBlog/>
    </BrowserRouter>      
    </div>
  )
}

export default App
