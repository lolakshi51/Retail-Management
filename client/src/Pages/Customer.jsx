import React ,{useState}from 'react';
import axios from 'axios';
import '../Components/Item/item.css';
import '../Components/NewCollections/NewCollections.css';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import '../Components/Navbar/Navbar.css'
import {Link} from 'react-router-dom'
import CustomerNavbar from '../Components/CustomerNavbar/CustomerNavbar'



const Customer =()=>{

    const [images,setData]=useState([]);
    const [product_ID,setProductID]=useState('');
React.useEffect(() => {
    fetch('http://localhost:3001/fetchimages')
      .then((res) => res.json())
      .then((data) =>{console.log(data);
      setData(data);
  })
      .catch(err=>console.log(err));
  }, []);

  //functions for handling add to cart
  const handleClick = (product_Id) => {
    
    console.log('Add to Cart clicked for image with id:', product_Id);
    axios.post('http://localhost:3001/add_to_cart', { product_Id})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error('Error adding item to cart', error));
  };


  return (

    <div>
  <CustomerNavbar/>
    <div className='collections'>
      {/* images: array of images
          image : single image
          id , imgname etc are the names of the attributes in newproduct table   */}
      
      {images.map((image) => (
        <div className='item' key={image.id}>
         <a href={`http://localhost:3000/product/${image.id}`}>
         <img src={`http://localhost:3001/images/${image.imgname}`} alt="Image" />
         </a>
         <p>{image.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    Rs.{image.new_price}

                </div>
                <div className="item-price-old">
                    Rs.{image.old_price}
                </div>
            </div>
            
            <button onClick={() => handleClick(image.id)}>Add to Cart</button>
        </div>
      ))}
      
    </div>
    </div>
 
    );
}
export default Customer;