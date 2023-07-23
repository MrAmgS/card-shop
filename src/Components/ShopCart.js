import React,{useContext} from 'react';
import { Link } from 'react-router-dom';


//Components


//Context
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';

const ShopCart = () => {
    const {state ,dispatch} = useContext(CartContext);

    return (
        <div>
            <div>
                {state.selectedItems.map( (item) => (
                <Cart key={item.id} data={item}  />))}
            </div>
            {state.itemsCounter > 0 && (
        <div >
          <p>
            <span>Total items :</span> 
          </p>
          <p>
            <span>Total Payments : </span> {state.total}
          </p>
          <div >
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
            <button  onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div >
          <h3> checkout Successfully</h3>
          <Link to="/products"> Buy More</Link>
        </div>
      )}

      { !state.checkout && state.itemsCounter === 0 && (
        <div >
          <h3> Clear Successfully , Want To Buy?</h3>
          <Link to="/products"> Go To Shop</Link>
        </div>
      )}
        </div>
    );
};

export default ShopCart;