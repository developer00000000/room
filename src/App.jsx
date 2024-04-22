
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './main.scss'
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Layout/>}>
           <Route path='/' element={<Home/>}/>
         </Route>
       </Routes>
     </BrowserRouter>
       {/* <Navbar/>
      <Footer/> */}
    </>
  )
}

export default App
