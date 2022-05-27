import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product =(props) => {
//console.log(props.product);
const {img, name, seller,price } = props.product;
//console.log(props);

   

    return (
        <div className='product'>
        <img src={img} alt="" srcset="" />
        <h2>{name}</h2>
        <h3>Brand Name: {seller}</h3>
        <h3> Price: ${price}</h3>
        <button onClick={() => props.handler(props.product)}>BUY NOW</button>
        <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
       
        </div>
    );
};

export default Product;