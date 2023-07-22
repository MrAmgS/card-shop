import React, { useContext } from "react";

//Components
import Products from "../shared/Products";

//Context
import { ProductsContext } from "../context/ProductsContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <Products key={product.key} productData={product} />
      ))}
    </div>
  );
};

export default Store;
