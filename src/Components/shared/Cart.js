import React,{useContext} from 'react';

//Context
import { CartContext } from '../../context/CartContextProvider';

//helper
import { shorten } from '../../helper/function';

const Cart = (props) => {
    const {image ,title, price , quantity} = props.data;
    const { dispatch } = useContext(CartContext);

    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h2>{shorten(title)}</h2>
                <h2>{price} $</h2>
            </div>
            <p>{quantity}</p>
            <button onClick={() => dispatch({type: "DECREASE" , payload : props.data})}> - </button>
            <button onClick={() => dispatch({type: "INCREASE" , payload : props.data})}> + </button>
        </div>
    );
};

export default Cart;