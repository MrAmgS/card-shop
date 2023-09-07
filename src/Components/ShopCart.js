import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';

//Components
import Cart from './shared/Cart';

//Actions
import {checkout , clear} from '../redux/cart/cartAction'



//styles
import styles from './ShopCart.module.css';

const ShopCart = () => {
    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map( (item) => (
                <Cart key={item.id} data={item}  />))}
            </div>
            {state.itemsCounter > 0 && (
        <div className={styles.payments} >
          <p>
            <span>Total items :</span> {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments : </span> {state.total} $
          </p>
          <div className={styles.buttonContainer} >
            <button className={styles.checkout} onClick={() => dispatch(checkout())}>
              Checkout
            </button>
            <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete} >
          <h3> checkout Successfully</h3>
          <Link to="/products"> Buy More</Link>
        </div>
      )}

      { !state.checkout && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3> Clear Successfully , Want To Buy?</h3>
          <Link to="/products"> Go To Shop</Link>
        </div>
      )}
        </div>
    );
};

export default ShopCart;