

import React, { useState } from 'react';
import axios from 'axios';
import './CSS/Admin.css';
import {Link} from 'react-router-dom'

const Admin = () => {
  const [productId, setProductId] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [oldPrice, setoldPrice] = useState('');
  const [message,setMessage]=useState('');

  const handlePriceUpdate =  async() => {
    
    try {
      console.log(productId);
      console.log(newPrice);
       const response= await axios.post("http://localhost:3001/updatePrice", {pid:productId,op:oldPrice,np:newPrice});
    

       console.log(response.data);
       setMessage("Price updated successfully");
    } catch (error) {
      console.error('Error updating price:', error);
      setMessage("Error updating price");
    }
  };

  return (

    <div className='Admin'>
     
    <div className="Admin-container">
        <h1>Admin</h1>
        <div className="loginsignup-fields">
        
        <input
        type="text"
        id="newId"
        value={productId}
        placeholder="Enter product ID"
        onChange={(e) => setProductId(e.target.value)}
        />
    
        <input
        type="number"
        id="newPrice"
        value={oldPrice}
        placeholder="Enter old price of the product"
        onChange={(e) => setoldPrice(e.target.value)}
        />
        
        <input
        type="number"
        id="newPrice"
        value={newPrice}
        placeholder="Enter new price"
        onChange={(e) => setNewPrice(e.target.value)}
        />
       </div>
      <button onClick={handlePriceUpdate}>Update Price</button>

      <Link to='/InsertProduct'><button>Add new product</button></Link>
      <h2>{message}</h2>
    </div>
    
    </div>
  );
};

export default Admin;
