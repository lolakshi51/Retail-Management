import React from "react";
import './App.css';
import InsertProduct from "./Pages/InsertProduct";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import GetCartItems from "./Pages/GetCartItems";
import SignupForm from './Pages/Signup';
import Admin from './Pages/Admin';
import Customer from './Pages/Customer';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) =>{console.log(data)})
      .catch(err=>console.log(err));
  }, []);

  return (
    <div>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner}category="kid"/>}/>
        <Route path='/product/:productID' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/getCartItems' element={<GetCartItems/>}/>
        
        <Route path='/signup' element={<SignupForm/>}/> 
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/insertproduct' element={<InsertProduct/>}/>
        <Route path='/customer' element={<Customer/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
