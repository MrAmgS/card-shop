import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};


const sumItems = (selectedItems) => {
  const itemsCounter = selectedItems.reduce(
    (total , product) => (total = total + product.quantity), 0 
    );
    const total = selectedItems.reduce(
      (total , product) =>(total = total + (product.price * product.quantity )) , 0
    ).toFixed(2);
    return {itemsCounter , total};
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItem],
        ...sumItems(newSelectedItem)
      };

    case "INCREASE":
      const IndexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[IndexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "DECREASE":
      const IndexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[IndexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{state ,dispatch }}>
            {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
