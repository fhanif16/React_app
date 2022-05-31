import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart , setCarts] = useState([]);
    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, [])
    const handler = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCarts(newCart);
    }
       
   
    return (
        <div className="shop-container">
      
                <div className="product-container">
                  {
                      products.map(product => <Product 
                      
                      key={product.id}
                      product = {product}
                    
                      handler = {handler}
                      >

                      </Product>)
                  }
                </div>
                <div className="cart-container">
                    <div className='cart'>
                    <h1>Order Summary</h1>
                    <p> Selected Items : {cart.length}</p>
                    <p>total price:</p>
                    <p>total shipping charge</p>
                    <p>Tax:</p>
                    <p>Grand Total</p>
                    <button id='clear'> Clear Cart</button>
                    
                    <button id='review'> Review Order</button>

                    </div>
                   
                </div>

                



            </div>

      
    );
};

export default Shop;