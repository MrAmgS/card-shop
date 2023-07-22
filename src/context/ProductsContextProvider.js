import React, { useEffect, useState, createContext } from "react";

//API service
import { getProducts } from "../service/api";

export const ProductsContext = createContext();

const ProductsContextProvide = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        setProducts( await getProducts());
    };

    fetchAPI();
  } ,[]);

  return (
    <ProductsContext.Provider value={products} >
        {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvide;
