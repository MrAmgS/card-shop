import React, { useContext } from "react";

//Components
import Products from "./shared/Products";

//Context
import { ProductsContext } from "../context/ProductsContextProvider";

//styles
import styles from './Store.module.css';

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Products key={product.key} productData={product} />
      ))}
    </div>
  );
};

export default Store;
