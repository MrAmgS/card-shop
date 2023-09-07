import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//helper
import { shorten, quantityCount, isInCart } from "../../helper/function";

// Actions
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/cart/cartAction";

//Icons
import deleteIcon from "../../assets/icons/trash.svg";

//styles
import styles from "./Product.module.css";

const Products = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={productData.image} alt="product" />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(removeItem(productData))}
            >
              {" "}
              <img src={deleteIcon} alt="delete" />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(decrease(productData))}
            >
              {" "}
              -{" "}
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(increase(productData))}
            >
              {" "}
              +{" "}
            </button>
          ) : (
            <button onClick={() => dispatch(addItem(productData))}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
