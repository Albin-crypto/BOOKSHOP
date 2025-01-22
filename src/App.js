import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Home from './components/Home';
import Contact from './components/contact';
import Product from './components/product';
import {SellData} from './sell';
import { ProductD } from './Productdata';
import { Mostsell } from './mostsell';
import { mycontext } from './components/context';
import { useState } from 'react';
import Whislist from './components/whislist';
import Cart from './components/cart';
import Admin from './components/admin';
import Productview from './components/productview';
import CustomerView from './components/customerview';
import Registeration from './components/registeration';
import Login from './components/login';
import Payment from './components/payment';
import Terms from './components/terms';
import Addproduct from './components/addproduct';
import Banneduser from './components/banneduser';




function App() {

  const stringData = "Welcome to this page";
  const [logUser, setLogUser, userBan] = useState([])
  const [logSuccess, setLogSuccess] = useState(false)
  const [user, setUser] = useState([])
  const [like, setLike] = useState([])
  const [cart, setCart] = useState([])
  const [PData, setPData] = useState(ProductD)
  const [MData, setMData] = useState(Mostsell)
  const [SData,setSData] = useState(SellData)
  const data = { PData, setPData, ProductD,  MData, setMData, Mostsell, SData,setSData,SellData, like, setLike, cart, setCart, user, setUser, logUser, setLogUser, userBan, logSuccess, setLogSuccess }

  return (
    <div className="App">
      <mycontext.Provider value={data}>
        <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About data={stringData} />} />
            <Route path='/contact' element={<Contact data={stringData} />} />
            <Route path='/product' element={<Product data={stringData} />} />
            <Route path='/wishlist' element={<Whislist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/productview' element={<Productview />} />
            <Route path='/customerview' element={<CustomerView />} />
            <Route path='/registeration' element={<Registeration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/addproduct' element={<Addproduct />} />
            <Route path='/banneduser' element={<Banneduser />} />











          </Routes>
        </BrowserRouter>
      </mycontext.Provider>
    </div>
  );
}

export default App;
