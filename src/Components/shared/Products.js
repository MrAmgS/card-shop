import React, { useContext } from "react";
import { Link } from "react-router-dom";

//helper
import { shorten, quantityCount, isInCart } from "../../helper/function";

//Context
import { CartContext } from "../../context/CartContextProvider";

//Icons
import deleteIcon from "../../assets/icons/trash.svg";

//styles 
import styles from './Product.module.css'

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={productData.image} alt="product" />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {(quantityCount(state, productData.id) === 1) && (<button className={styles.smallButton} onClick={() =>dispatch({ type: "REMOVE_ITEM", payload: productData })} > {" "}<img src={deleteIcon} alt="delete" /></button>)}
          {(quantityCount(state, productData.id) > 1) && (<button className={styles.smallButton}onClick={() => dispatch({ type: "DECREASE", payload: productData })}>{" "}-{" "}</button>)}
          {
             (quantityCount(state , productData.id)) > 0 && <span className={styles.counter}>{quantityCount(state , productData.id)}</span>
          }
          {
              isInCart(state , productData.id) ? 
               <button className={styles.smallButton} onClick={() =>dispatch({type : "INCREASE" , payload : productData})}> + </button> :
                <button onClick={() =>dispatch({type : "ADD_ITEM" , payload : productData})}>Add to Cart</button>
           }
        </div>
      </div>
    </div>
  );
};

export default Products;
