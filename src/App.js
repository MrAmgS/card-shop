import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Store from "./Components/Store";

//Context
import ProductsContextProvide from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductsContextProvide>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvide>
  );
}

export default App;
