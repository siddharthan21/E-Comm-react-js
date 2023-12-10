import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Shop from '../src/pages/Shop'
import Shopcat from '../src/pages/Shopcat'
import Product from '../src/pages/Product'
import Cart from '../src/pages/Cart'
import Login from '../src/pages/Login'
import men_banner from './components/assests/banner_mens.png'
import women_banner from './components/assests/banner_women.png'
import kid_banner from './components/assests/banner_kids.png'
import A from './pages/A';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<Shopcat banner={men_banner} category="men"/>} />
          <Route path='/Women' element={<Shopcat banner={women_banner} category="women"/>} />
          <Route path='/kids' element={<Shopcat banner={kid_banner} category="kid"/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':ID' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>  
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/aa' element={<A/>} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
