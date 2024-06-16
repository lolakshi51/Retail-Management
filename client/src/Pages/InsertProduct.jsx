import React ,{useState}from 'react';
import axios from 'axios';
import './CSS/InsertProduct.css'
const InsertProduct =()=>{
 
  //product details
    const [product_id, setproduct_id] = useState("");
    const [product_name, setproduct_name] = useState("");
    const [product_category, setproduct_category] = useState("");
    const [product_oldprice,setproduct_oldprice] = useState("");
    const [product_newprice,setproduct_newprice] = useState("");
    const [message, setMessage] = useState("");

  //for product image
  const [selectedFile, setSelectedFile] = useState(null);
  
 
  //to get hold of file name
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  
  //to upload image
  const handleUpload = async () => {
    
    const formData = new FormData();
    formData.append('image',selectedFile);
    formData.append('product_id',product_id);

    
    await axios.post('http://localhost:3001/upload', formData).then(res=>console.log(res.data.Status))
    .catch(err=>console.log(err));
}
    
//for final submission of the form
const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post("http://localhost:3001/new_product", {
            product_id,
            product_name,
            product_category,
            product_oldprice,
            product_newprice,

          });
          // Display success message
          setMessage("record inserted");

        
        } catch (error) {
          // Display error message
          setMessage("failed");
        }
      };
    return(
        <div className='insertproduct'>
            <div className="insertproduct-container">
                <h1>Add Product</h1>
                
                <div className="insertproduct-fields">
                    <input type="text" placeholder='Product id'
                     value={product_id}
                     onChange={(e) => setproduct_id(e.target.value)}/>
                    <input type="text" placeholder='Product name'
                    value={product_name}
                    onChange={(e) => setproduct_name(e.target.value)}/>
                    <input type="text" placeholder='Category'
                     value={product_category}
                     onChange={(e) => setproduct_category(e.target.value)}/>
                    <input type="text" placeholder='Old price'
                     value={product_oldprice}
                     onChange={(e) => setproduct_oldprice(e.target.value)}/>
                    <input type="text" placeholder='New price'
                     value={product_newprice}
                     onChange={(e) => setproduct_newprice(e.target.value)}/>
                    <button onClick={handleSubmit}>Submit product details</button>
                    <div className="Upload-button">
                    <input type="file" onChange={handleFileChange} placeholder='Choose File'/> 
                    <button onClick={handleUpload}> Upload image</button>
                  
                    </div>
                    
                </div>
                
                
                <h2>{message}</h2>
            </div>
        
        </div>
    )
}

export default InsertProduct