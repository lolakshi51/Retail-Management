import React, { useContext ,useState} from 'react'
import axios from 'axios'
import logo from '../Components/Assets/logo.jpg'
import '../Components/Item/item.css';
import remove_icon from '../Components/Assets/cart_cross_icon.png'
import CustomerNavbar from '../Components/CustomerNavbar/CustomerNavbar';
const GetCartItems=()=>{
    const [products,setData]=useState([]);
    axios.get(`http://localhost:3001/get_cart_items`)
      .then(response => {
        
       setData(response.data);
     })
      .catch(error => console.error('Error fetching cart items', error));


    const handleRemovefromCart=(productid)=>{
        console.log(productid);
        axios.post('http://localhost:3001/removeFromCart',{productid}).then((response)=>
        {
            console.log(response.data);
        }).catch((err)=>console.log(err))
    }
  
return(
    <div>
    <div  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <img style={{alignSelf:'center'}} src={logo}  alt=""/></div>
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p> Product</p>
            <p> Title</p>
            <p> Price</p>
            <p> Category</p>
            
        </div>
        <hr/>
        {products.map((product)=>(
                    
                      <div  >
                        <div className="cartitems-format cartitems-format-main"  >
                        
                        <img src={`http://localhost:3001/images/${product.imgname}`} alt="Image" className='carticon-product-icon' />
                            <p>{product.name}</p>
                            <p>Rs.{product.new_price}</p>
                            <p>{product.category}</p>
                        
                        </div>
                        <hr/>
                    
                    </div>
                    ))}
    
    </div>
    <div className="cartitems-total" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <button  onClick={window.print}>Proceed to buy</button></div>
    </div>
    
);

}
export default GetCartItems;