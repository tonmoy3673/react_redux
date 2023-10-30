import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './ProductSlice';

const Products = () => {
const {isLoading,products,error}=useSelector((state)=>(state));

const dispatch=useDispatch();
useEffect(()=>{
    dispatch(fetchProduct())
},[])

console.log(products)
    return (
        <div>
            <h2 className='text-2xl'>All Products </h2>
            
        </div>
    );
};

export default Products;