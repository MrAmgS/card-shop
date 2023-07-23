import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

//styles 
import styles from './ProductDetail.module.css'

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
        <div className={styles.container}>
           <img className={styles.image} src={image} alt='product' />
           <div className={styles.textContainer}>
            <h2>{title}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}>
                <span > Category : </span> {category} 
            </p>
            <div className={styles.buttonContainer} >
                <span className={styles.price}>{price} $</span>
                <Link to='/products'>Back to shop</Link>
            </div>
           </div>
        </div>
    );
};

export default ProductDetail;