import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const params = useParams()
    const id = params.id;
    const [data , setData] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () =>{
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setData(response.data)
        }

        fetchAPI();
    }
    ,[])

    const { image, title, category, description, price } = data;

    return (
        <div>
           <img src={image} alt='product' />
           <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                <span>Category : </span> {category} 
            </p>
            <div>
                <span>{price}</span>
                <Link to='/products'>Back to shop</Link>
            </div>
           </div>
        </div>
    );
};

export default ProductDetail;