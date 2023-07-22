import React from 'react';

const Products = ({productData}) => {

    return (
        <>
        <div>
            <img src={productData.image} alt='product' />
        </div>
            
        </>
    );
};

export default Products;